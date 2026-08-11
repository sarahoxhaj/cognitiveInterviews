<template>
    <div class="bg-gray-50 dark:bg-slate-600 flex flex-col h-min-screen overflow-hidden">
        <div class="bg-gray-50 dark:bg-slate-600 flex flex-col min-h-screen">
            <div class="mt-20">
                <div class="flex flex-row items-start justify-center gap-x-10">

                    <div class="shrink-0">
                        <img src="@/assets/1.png" alt="Image 1" class="size-[580px] mt-10">
                    </div>

                    <div class="max-w-2xl mt-52">
                        <p class="text-gray-900 dark:text-white">
                            During this process, were there any statements you found confusing or difficult to rate?
                            <br>If so, please describe which ones and why.
                        </p><br>
                        <textarea v-model="additionalComment" id="additionalComment" rows="4"
                            class="dark:text-black mt-4 rounded-lg px-0 w-full border-[1.5px] border-gray-400 focus:ring-0 focus:outline-none dark:placeholder-gray-400 bg-gray-50"
                            placeholder=" Write your thoughts here..."></textarea>

                        <div class="mt-10">
                            <button @click="submitSurvey" type="submit" :disabled="isSubmitting"
                                class="bg-sky-900 hover:bg-sky-800 text-white px-4 py-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                {{ isSubmitting ? 'Submitting...' : 'Submit' }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from '@/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default {
    name: 'PostQuestionnaire',
    data() {
        return {
            additionalComment: "",
            isSubmitting: false,
        };
    },
    methods: {
        async submitSurvey() {
            if (this.isSubmitting) return;
            this.isSubmitting = true;

            try {
                const userID = sessionStorage.getItem("userID");
                const ratings = JSON.parse(sessionStorage.getItem("ratings") || "{}");

                const userData = {
                    id: userID,
                    gender: sessionStorage.getItem("gender"),
                    age: sessionStorage.getItem("age"),
                    practiceRating: sessionStorage.getItem("practiceRating"),
                };

                await addDoc(collection(db, "userData"), userData);

                const ratingsData = {
                    userID: userID,
                    ratings: ratings,
                    additionalComment: this.additionalComment,
                };

                await addDoc(collection(db, "item-ratings"), ratingsData);

                this.$router.replace({ name: 'LastView' });

            } catch (error) {
                console.error("Error saving data:", error);
                alert("There was an error saving your data. Please try again.");
                this.isSubmitting = false;
            }
        }
    }
}
</script>