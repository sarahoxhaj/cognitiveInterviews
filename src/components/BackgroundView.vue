<template>

    <div class="bg-gray-50 dark:bg-slate-600 flex flex-col items-center justify-center min-h-screen">
        <p class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white mt-7 text-center">Background</p>
        <div class="text-left max-w-2xl mx-auto px-6 mt-7 w-full">
            <p>
                <span class="text-red-500 text-2xl">* </span>
                <span class="dark:text-white"> <b>Which gender do you identify with?</b></span>
            </p>

            <div>
                <label class="flex items-center dark:text-white mt-2">
                    <input type="radio" name="choice" value="female" class="mr-2 ">
                    Female
                </label>
                <label class="flex items-center dark:text-white mt-2">
                    <input type="radio" name="choice" value="male" class="mr-2 ">
                    Male
                </label>
                <label class="flex items-center dark:text-white mt-2">
                    <input type="radio" name="choice" value="diverse" class="mr-2 ">
                    Diverse
                </label>
                <label class="flex items-center dark:text-white mt-2">
                    <input type="radio" name="choice" value="wo-gender-entry" class="mr-2">
                    Without gender entry
                </label>
                <label class="flex items-center dark:text-white mt-2">
                    <input type="radio" name="choice" value="prefer-no-answer" class="mr-2">
                    I prefer not to answer
                </label><br>


                <div class="mt-5">
                    <p>
                        <span class="text-red-500 text-2xl">* </span>
                        <span class="dark:text-white"> <b>What is your age group?</b></span>
                    </p>

                    <select v-model="age" id="age" required
                        class="mt-2 ml-6 dark:bg-slate-200 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" disabled class="dark:text-zinc-400">age group</option>
                        <option value="18-24" class="dark:text-zinc-400">18-24</option>
                        <option value="25-34" class="dark:text-zinc-400">25-34</option>
                        <option value="35-44" class="dark:text-zinc-400">35-44</option>
                        <option value="45-54" class="dark:text-zinc-400">45-54</option>
                        <option value="54-64" class="dark:text-zinc-400">54-64</option>
                        <option value="older" class="dark:text-zinc-400">65+</option>
                    </select>
                </div>


                <p class="mt-5">
                    <span class="text-red-500 text-2xl">* </span>
                    <span class="dark:text-white"> <b>What is the highest level of education you have
                            completed?</b></span>
                </p>

                <select v-model="education" id="education" required
                    class="mt-2 ml-6 dark:bg-slate-200 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="" disabled class="dark:text-zinc-400">level of education</option>
                    <option value="high-school" class="dark:text-zinc-400">High school diploma or equivalent</option>
                    <option value="some-college" class="dark:text-zinc-400">Some college, no degree</option>
                    <option value="bachelor" class="dark:text-zinc-400">Bachelor's or equivalent level</option>
                    <option value="master" class="dark:text-zinc-400">Master's or equivalent level</option>
                    <option value="doctoral" class="dark:text-zinc-400">Doctoral or equivalent level (e.g., PhD)
                    </option>
                    <option value="other" class="dark:text-zinc-400">Other</option>
                    <!-- <option value="prefer-no" class="dark:text-zinc-400">Prefer not to say</option> -->
                </select>
            </div>


            <div class="mt-6 pb-6">
                <button @click.prevent="goToCollectingDefinitions" type="submit"
                    class="bg-sky-900 hover:bg-sky-800 text-white px-4 py-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'BackgroundView',
    data() {
        return {
            otherGender: '',
            age: '',
            education: '',
        };
    },
    methods: {
        async goToCollectingDefinitions() {
            const selectedChoice = document.querySelector('input[name="choice"]:checked');
            if (!selectedChoice) {
                alert("Please answer the questions.");
                return;
            }
            let gender = selectedChoice.value;
            if (selectedChoice.value === 'other') {
                if (!this.otherGender.trim()) {
                    alert("Please specify your gender in the 'Other' field.");
                    return;
                }
                gender = this.otherGender;
            }

            const education = this.education;
            const ageInput = this.age;
            const userID = Math.floor(10000 + Math.random() * 90000).toString();

            if (!ageInput) {
                alert("Please select your age group.");
                return;
            }
            if (!this.education) {
                alert("Please select your highest level of education.");
                return;
            }

            sessionStorage.setItem("userID", userID);
            sessionStorage.setItem("gender", gender);
            sessionStorage.setItem("education", education);
            sessionStorage.setItem("age", ageInput);

            console.log("Data successfully saved in session")

            //this.$router.push('/ItemValidation');
            this.$router.replace({ name: 'TrainingTask' });
        }
    }
}
</script>
