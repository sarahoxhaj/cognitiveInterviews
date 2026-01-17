<template>

    <div class="bg-gray-50 dark:bg-slate-600 flex flex-col min-h-screen">
        <p class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white mt-7 text-center">Background</p>
        <div class="text-left px-24 mt-7">
            <p>
                <span class="text-red-500 text-2xl">* </span>
                <span class="dark:text-white"> <b>Which gender do you identify with?</b></span>
            </p>

            <div class="mt-1 mb-3 ml-5 flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" style="width: 12px; height: 12px;" fill="currentColor"
                    class="bi bi-info-circle dark:text-white" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path
                        d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
                <p class="text-sm dark:text-white"><i>Choose one of the following answers.</i></p>
            </div>

            <div>
                <label class="flex items-center dark:text-white mt-2">
                    <input type="radio" name="choice" value="woman" class="mr-2 ">
                    Woman (including trans woman)
                </label>
                <label class="flex items-center dark:text-white mt-2">
                    <input type="radio" name="choice" value="man" class="mr-2 ">
                    Man (including trans man)
                </label>
                <label class="flex items-center dark:text-white mt-2">
                    <input type="radio" name="choice" value="non-binary" class="mr-2 ">
                    Non-binary/gender diverse
                </label>
                <label class="flex items-center dark:text-white mt-2">
                    <input type="radio" name="choice" value="prefer-no-answer" class="mr-2">
                    Prefer not to answer
                </label>
                <div class="flex items-center space-x-4 dark:text-white">
                    <label class="flex items-center">
                        <input type="radio" name="choice" value="other" class="mr-2 ">
                        Prefer to self-describe:
                    </label>
                    <input v-model="otherGender" type="text" id="name"
                        class="dark:text-black bg-gray-50 dark:bg-slate-200 border border-gray-300 dark:placeholder-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-25 h-9 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required />
                </div> <br>


                <div>
                    <p>
                        <span class="text-red-500 text-2xl">* </span>
                        <span class="dark:text-white"> <b>What is your age?</b></span>
                    </p>

                    <select v-model="age" id="age" required
                        class="ml-6 dark:bg-slate-200 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" disabled class="dark:text-zinc-400">--age group--</option>
                        <option value="18-24" class="dark:text-zinc-400">18-24</option>
                        <option value="25-34" class="dark:text-zinc-400">25-34</option>
                        <option value="35-44" class="dark:text-zinc-400">35-44</option>
                        <option value="45-54" class="dark:text-zinc-400">45-54</option>
                        <option value="54-64" class="dark:text-zinc-400">54-64</option>
                    </select>
                </div>


                <p class="mt-5">
                    <span class="text-red-500 text-2xl">* </span>
                    <span class="dark:text-white"> <b>For how many years have you worked in or studied the field of
                            visualization?</b></span>
                </p>

                <div class="mt-1 mb-3 ml-5 flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" style="width: 12px; height: 12px;" fill="currentColor"
                        class="dark:text-white bi bi-info-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path
                            d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                    <p class="text-sm dark:text-white"><i>Only numbers can be entered in this field.</i></p>
                </div>

                <input v-model="years" type="number" id="years"
                    class="bg-gray-50 dark:bg-slate-200 border border-gray-300 dark:placeholder-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-25 h-9 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    min="0" step="1" required />


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
            years: '',
            age: '',
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

            const yearsInput = this.years;
            const ageInput = this.age;  
            const userID = this.generateUserID();


            if (isNaN(yearsInput) || yearsInput === '') {
                alert("Please enter a valid number for the second question.");
                return;
            }

            if (!ageInput) {
                alert("Please select your age group.");
                return;
            }
            
            sessionStorage.setItem("userID", userID);
            sessionStorage.setItem("gender", gender);
            sessionStorage.setItem("years", yearsInput);
            sessionStorage.setItem("age", ageInput);

            console.log("Data successfully saved in session")

            this.$router.push('/ItemValidation');
        }
    }
}
</script>
