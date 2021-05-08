<template>
  <div class="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
    <img class="col-span-1 lg:col-span-6" src="@/assets/images/schedule.png" />
    <div class="col-span-1 lg:col-span-6 m-auto px-10 text-center">
      <h1 class="mb-6 underline">Class Details</h1>
      <ul class="list-disc text-left mb-5">
        <li>
          To get started, fill out this
          <a href="https://forms.gle/UEEaHArhuaD96pCK8" target="_blank">
            Waiver and Information Form
          </a>
        </li>
        <li>
          Classes are taught through Zoom and scheduled in
          <b>Eastern Standard Time</b>
          . New to Zoom? I’m here to help you get set up!
          <a href="mailto:thejillpillmethod@gmail.com">Shoot me an e-mail</a>
        </li>
        <li>Private and corporate classes available</li>
        <li>
          Cost:
          <b>$10/class</b>
          or
          <b>$20/week</b>
          for unlimited classes
        </li>
        <li>
          Payments can be made through:
          <ul class="pl-10 mt-3">
            <li>
              Venmo:
              <a href="https://venmo.com/The_JillPill" target="_blank">
                @the_jillpill
              </a>
            </li>
            <li>
              Paypal:
              <a href="http://paypal.me/thejillpill" target="_blank">
                paypal.me/thejillpill
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <Button class="shadow-lg" @click="scrollToSignUp">
        Sign up for classes
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',

  head: {
    title: 'About',
  },
}
</script>
