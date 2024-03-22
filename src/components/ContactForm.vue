<template>
  <div class="contact-form-wrapper">
    <form @submit.prevent="submitForm" class="contact-form">
      <h2>Contact Us</h2>
      <div class="form-group" :class="{'invalid': errors.name}">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" name="name" placeholder="Your Name">
        <transition name="fade">
          <span class="error-message" v-if="errors.name">{{ errors.name }}</span>
        </transition>
      </div>
      <div class="form-group" :class="{'invalid': errors.email}">
        <label for="email">Email ID:</label>
        <input type="email" id="email" v-model="form.email" name="email" placeholder="Your Email">
        <transition name="fade">
          <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
        </transition>
      </div>
      <div class="form-group" :class="{'invalid': errors.mobile}">
        <label for="mobile">Mobile Number:</label>
        <input type="tel" id="mobile" v-model="form.mobile" name="mobile" placeholder="Your Mobile Number">
        <transition name="fade">
          <span class="error-message" v-if="errors.mobile">{{ errors.mobile }}</span>
        </transition>
      </div>
      <div class="form-group" :class="{'invalid': errors.message}">
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" name="message" placeholder="Your Message"></textarea>
        <transition name="fade">
          <span class="error-message" v-if="errors.message">{{ errors.message }}</span>
        </transition>
      </div>
      <div class="form-group" :class="{'invalid': errors.service}">
        <label for="service">Type of Service Needed:</label>
        <select id="service" v-model="form.service" name="service">
          <option disabled value="">Please select one</option>
          <option>SEO</option>
          <option>Website Design</option>
          <option>Website Development</option>
          <option>Website Management</option>
          <option>Social Media Management</option>
        </select>
        <transition name="fade">
          <span class="error-message" v-if="errors.service">{{ errors.service }}</span>
        </transition>
      </div>
      <button type="submit" class="submit-button">Submit</button>
    </form>
  </div>
</template>

<script>
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import { useStore } from 'vuex';
import { reactive, ref } from 'vue';

export default {
  name: 'ContactForm',
  setup() {
    const store = useStore();
    const { handleSubmit, errors } = useForm();
    const { value: name } = useField('name', yup.string().required());
    const { value: email } = useField('email', yup.string().required().email());
    const { value: mobile } = useField('mobile', yup.string().required().min(10));
    const { value: message } = useField('message', yup.string().required());
    const { value: service } = useField('service', yup.string().required());

    const form = reactive({
      name,
      email,
      mobile,
      message,
      service,
    });

    const submissionStatus = ref('');

    const submitForm = handleSubmit(async (values) => {
      console.log("Submitting contact form...", values);
      try {
        await store.dispatch('form/submitForm', values);
        console.log("Form submitted successfully.");
        submissionStatus.value = 'success';
        alert("Form submitted successfully."); // User-friendly success feedback
        // Reset form after submission
        form.name = '';
        form.email = '';
        form.mobile = '';
        form.message = '';
        form.service = '';
      } catch (error) {
        console.error("Error submitting form:", error.response ? error.response.data : error);
        submissionStatus.value = 'error';
        alert("Error submitting form. Please try again."); // User-friendly error feedback
      }
    });

    return { form, errors, submitForm, submissionStatus };
  }
}
</script>

<style scoped>
.contact-form-wrapper {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-form h2 {
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: #0056b3;
  box-shadow: 0 0 0 2px rgba(0,86,179,0.2);
}

.form-group.invalid .error-message {
  opacity: 1;
  height: auto;
}

.form-group textarea {
  height: 150px;
}

.error-message {
  color: #ff3860;
  margin-top: 0.25rem;
  font-size: 0.9rem;
  display: block;
  transition: opacity 0.3s ease;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.submit-button {
  background-color: #0056b3;
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover,
.submit-button:focus {
  background-color: #004494;
  outline: none;
}
</style>