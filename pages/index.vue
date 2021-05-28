<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Solle Naturals Coding Challenge!
        </v-card-title>
        <v-card-text>
          <p>
            This is a coding exercise to test your understanding of our frontend
            tech stack.
          </p>
          <p>We use Vue.js, Nuxt.js, Vuetify</p>
          <br />

          <h2>Your Task</h2>
          <br />
          <p>We would like you to display a list of our products.</p>
          <p>
            We have set up a skeleton of a page, which you can find in
            <code>pages/products.vue</code>.
          </p>
          <p>
            We have also included a service which will retreive a list of our
            products from our API.
          </p>
          <p>
            Your task is to use this service to load the list of our products,
            and display them however you wish.
          </p>
          <p>
            Best of luck, and please feel free to reach out if you have any
            questions:
            <a href="mailto:chandler@sollenaturals.com"
              >chandler@sollenaturals.com</a
            >
          </p>

          <hr class="my-6" />

          <p>
            For more information on Vue, check out the
            <a
              href="https://vuejs.org/v2/guide/"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation </a
            >.
          </p>

          <p>
            For more information on Nuxt, check out the
            <a
              href="https://nuxtjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation </a
            >.
          </p>

          <p>
            For more information on Vuetify, check out the
            <a
              href="https://vuetifyjs.com/en/introduction/why-vuetify/"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation </a
            >.
          </p>

          <hr class="my-6" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/products">
            Products
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  data() {
    return {};
  }
};
</script>
