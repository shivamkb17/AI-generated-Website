import { createStore } from 'vuex'
import axios from 'axios'

const formModule = {
  namespaced: true,
  state: () => ({
    name: '',
    email: '',
    mobile: '',
    message: '',
    service: '',
  }),
  mutations: {
    UPDATE_NAME(state, name) {
      state.name = name;
    },
    UPDATE_EMAIL(state, email) {
      state.email = email;
    },
    UPDATE_MOBILE(state, mobile) {
      state.mobile = mobile;
    },
    UPDATE_MESSAGE(state, message) {
      state.message = message;
    },
    UPDATE_SERVICE(state, service) {
      state.service = service;
    },
  },
  actions: {
    async submitForm({ commit, state }) {
      console.log("Submitting form to Zoho CRM...");
      const formData = {
        data: [{
          First_Name: state.name,
          Email: state.email,
          Phone: state.mobile,
          Description: state.message,
          Service_Requested: state.service,
        }],
        trigger: [
          "approval",
          "workflow",
          "blueprint"
        ]
      };
      try {
        const response = await axios.post('https://www.zohoapis.com/crm/v2/Leads', formData, {
          headers: {
            Authorization: `Zoho-oauthtoken ${import.meta.env.VITE_ZOHO_CRM_OAUTH_TOKEN}`,
            'Content-Type': 'application/json',
          },
        });
        console.log("Form submitted successfully to Zoho CRM.", response.data);
        // Commit any needed mutations or dispatch actions for success handling here
      } catch (error) {
        console.error("Error submitting form to Zoho CRM:", error.response ? error.response.data : error);
        // Handle error feedback to user here
        // Commit any needed mutations or dispatch actions for error handling here
        throw error; // Rethrow to handle it in the component
      }
    }
  }
}

export default createStore({
  modules: {
    form: formModule
  }
})