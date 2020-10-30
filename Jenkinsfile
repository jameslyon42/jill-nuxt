pipeline {
    agent {
        docker { 
          image 'docker'
          args '-u root -v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
    environment {
        DIGITALOCEAN_ACCESS_TOKEN = credentials('DIGITALOCEAN_ACCESS_TOKEN')
        REGISTRY = "registry.digitalocean.com/syntaxsugar42/jillpill:${BUILD_NUMBER}"
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh '''
                    apk update
                    apk add --no-cache wget curl
                    wget https://github.com/digitalocean/doctl/releases/download/v1.45.0/doctl-1.45.0-linux-amd64.tar.gz
                    tar xf doctl-1.45.0-linux-amd64.tar.gz
                    mv ./doctl /usr/local/bin
                    doctl auth init
                    doctl registry login
                    docker build --no-cache -t "${REGISTRY}" .
                '''
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh '''
                  docker run "${REGISTRY}" npm run lint
                '''
            }
        }
        stage('Deploy') {
            when{
                branch 'master'
            }
            steps {
                echo 'Deploying....'
                sh '''
                    docker push "${REGISTRY}"
                    curl -LO https://storage.googleapis.com/kubernetes-release/release/`curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt`/bin/linux/amd64/kubectl
                    mv ./kubectl /usr/bin/kubectl
                    chmod +x /usr/bin/kubectl
                    doctl kubernetes cluster kubeconfig save jill-pill
                    kubectl --record deployment.apps/jill-pill set image deployment.v1.apps/jill-pill jill-pill="${REGISTRY}"
                '''
            }
        }
    }
    post {
        always {
            script {
                try {
                    echo 'Cleaning up..'
                    sh '''
                        docker system prune -af
                    '''
                } catch (err) {
                    echo err.getMessage()
                }
            }
        }
    }
}