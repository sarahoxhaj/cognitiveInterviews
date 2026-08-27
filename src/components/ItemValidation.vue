<template>
    <div class="bg-gray-50 dark:bg-slate-600 flex flex-col items-center h-min-screen overflow-hidden dark:text-white">
        <div class="bg-gray-50 dark:bg-slate-600 flex flex-col items-center min-h-screen">
            <div v-if="isSubmitting" class="mt-20 text-center">
                <p class="text-lg text-gray-700 dark:text-white">Submitting your responses...</p>
            </div>

            <div v-else-if="questions.length" class="mt-20">
                <div class="flex flex-row items-start justify-center gap-x-20">

                    <div class="shrink-0 self-start relative">
                        <div class="absolute -top-8 right-0 text-sm font-medium text-gray-700 dark:text-gray-200">
                            {{ ratedCount }}/{{ questions.length }}
                        </div>
                        <img src="@/assets/1.png" alt="Image 1" class="size-[580px] mt-10">
                    </div>

                    <div class="w-[372px] shrink-0 self-start mt-20">
                        <p class="mt-5 mb-5">{{ currentQuestion.text }}</p>

                        <div class="flex items-start gap-4">
                            <div class="w-full">
                                <input type="range" min="1" max="5" step="1" v-model="currentValue" list="tickmarks"
                                    :disabled="dontKnow"
                                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:text-white disabled:opacity-40 disabled:cursor-not-allowed" />
                                <datalist id="tickmarks" class="flex justify-between w-full px-[2px]">
                                    <option value="1"></option>
                                    <option value="2"></option>
                                    <option value="3"></option>
                                    <option value="4"></option>
                                    <option value="5"></option>
                                </datalist>
                                <div
                                    class="flex justify-between text-sm text-gray-600 dark:text-gray-300 mt-1 px-[9px]">
                                    <span>1</span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5</span>
                                </div>
                                <div class="flex justify-between text-xs text-gray-800 dark:text-white mt-0.5 px-[9px]">
                                    <span>Strongly <br>disagree</span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span>Strongly <br>agree</span>
                                </div>
                            </div>
                        </div>
                        <button @click="toggleDontKnow" type="button"
                            :class="dontKnow
                                ? 'bg-sky-900 text-white border-sky-900 dark:bg-blue-600 dark:border-blue-600'
                                : 'bg-white text-gray-900 border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:text-black dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-400'"
                            class="mt-8 shrink-0 py-2 px-2 text-sm font-medium rounded-lg border focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700">
                            I do not know
                        </button>
                        <div class="mt-10">
                            <button @click="nextStep" type="submit"
                                class="bg-sky-900 hover:bg-sky-800 text-white px-4 py-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
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

const QUESTION_BANK = [
    { id: 'q1', text: 'I find this visualization easy to interpret.' },
    { id: 'q2', text: 'I find this visualization easy to understand.' },
    { id: 'q3', text: 'I find the visualization easy to comprehend.' },
    { id: 'q4', text: 'I find the visualization well organized.' },
    { id: 'q5', text: 'I find this visualization easy to use.' },
    { id: 'q6', text: 'I feel irritated by this visualization.' },
    { id: 'q7', text: 'I find this visualization intuitive.' },
    { id: 'q8', text: 'I find the points in the visualization easy to distinguish.' },
    { id: 'q9', text: 'I find the visualization has poor pattern visibility.' },
    { id: 'q10', text: 'I feel stressed by the visualization.' },
    { id: 'q11', text: 'I can detect patterns in the visualization.' },
    { id: 'q12', text: 'I find the visualization is poorly designed.' },
    { id: 'q13', text: 'I find the visualization is missing important details.' },
    { id: 'q14', text: 'I find this visualization familiar.' },
    { id: 'q15', text: 'I find that the visualization needs additional graphics to communicate effectively.' },
    { id: 'q16', text: 'I cannot distinguish between colors.' },
];

export default {
    name: 'CollectingTerms',
    data() {
        return {
            userID: null,
            questions: [],
            currentIndex: 0,
            currentValue: "3",
            dontKnow: false,
            ratings: {},
            isSubmitting: false,
        };
    },

    computed: {
        currentQuestion() {
            return this.questions[this.currentIndex];
        },
        ratedCount() {
            return Object.values(this.ratings).filter(v => v !== null && v !== undefined).length;
        }
    },

    mounted() {
        this.userID = sessionStorage.getItem("userID");

        if (!this.userID) {
            alert("User ID not found. Please fill out the background information first.");
            this.$router.push('/BackgroundView');
            return;
        }

        // Shuffle item order
        this.questions = this.shuffle([...QUESTION_BANK]);

        this.questions.forEach(q => {
            this.ratings[q.id] = null;
        });

        this.currentValue = "3";
        this.dontKnow = false;
    },

    methods: {
        shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        },

        toggleDontKnow() {
            this.dontKnow = !this.dontKnow;
        },

        async nextStep() {
            this.ratings[this.currentQuestion.id] = this.dontKnow ? "DK" : parseInt(this.currentValue, 10);
            await this.advance();
        },

        async advance() {
            if (this.currentIndex < this.questions.length - 1) {
                this.currentIndex++;
                this.currentValue = "3";
                this.dontKnow = false;
                return;
            }

            const allAnswered = this.questions.every(
                q => this.ratings[q.id] !== null && this.ratings[q.id] !== undefined
            );

            if (!allAnswered) {
                alert("Please answer all statements before continuing.");
                return;
            }

            sessionStorage.setItem("ratings", JSON.stringify(this.ratings));
            this.isSubmitting = true;
            await this.submitSurvey();
        },

        async submitSurvey() {
            try {
                const userData = {
                    id: this.userID,
                    gender: sessionStorage.getItem("gender"),
                    age: sessionStorage.getItem("age"),
                    education: sessionStorage.getItem("education"),
                    practiceRating: sessionStorage.getItem("practiceRating"),
                };

                await addDoc(collection(db, "userData"), userData);

                const ratingsData = {
                    userID: this.userID,
                    ratings: this.ratings,
                    itemOrder: this.questions.map(q => q.id),
                    additionalComment: "",
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