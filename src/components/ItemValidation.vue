<template>
    <div class="bg-gray-50 dark:bg-slate-600 flex flex-col h-min-screen overflow-hidden">
        <div class="bg-gray-50 dark:bg-slate-600 flex flex-col min-h-screen">
            <div class="mt-20">
                <div class="flex flex-row items-start justify-center gap-x-10">

                    <div class="shrink-0">
                        <img src="@/assets/1.png" alt="Image 1" class="size-[580px] mt-10">
                    </div>

                    <div class="max-w-2xl">
                        <p class="text-gray-900 dark:text-white">

                            Take a moment to look at the visualization on the left. <br>The statements below reflect
                            different ways people might experience the visual complexity of a visualization - including
                            how it looks, how it makes you feel, and how easy it is to process.<br>Please rate how much
                            each statement applies to your own impression of this visualization, from <b>1 (completely
                                disagree)</b> to <b>5 (completely agree)</b>.
                        </p><br>

                        <div v-if="step === 0">
                            <p class="mt-5">I find this visualization easy to interpret.</p>
                            <div class="w-full max-w-md mx-auto">
                                <input type="range" min="1" max="5" step="1" v-model="ratings.q1" list="tickmarks"
                                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:bg-gray-700" />
                                <datalist id="tickmarks" class="flex justify-between w-full px-[2px]">
                                    <option value="1" label="1"></option>
                                    <option value="2" label="2"></option>
                                    <option value="3" label="3"></option>
                                    <option value="4" label="4"></option>
                                    <option value="5" label="5"></option>
                                </datalist>
                                <div class="flex justify-between text-sm text-gray-600 dark:text-gray-300 mt-1 px-1">
                                    <span>1<br></span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5<br></span>
                                </div>
                            </div>
                            <p class="mt-5">I find this visualization easy to understand.</p>
                            <div class="w-full max-w-md mx-auto">
                                <input type="range" min="1" max="5" step="1" v-model="ratings.q2" list="tickmarks"
                                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:bg-gray-700" />
                                <datalist id="tickmarks" class="flex justify-between w-full px-[2px]">
                                    <option value="1" label="1"></option>
                                    <option value="2" label="2"></option>
                                    <option value="3" label="3"></option>
                                    <option value="4" label="4"></option>
                                    <option value="5" label="5"></option>
                                </datalist>
                                <div class="flex justify-between text-sm text-gray-600 dark:text-gray-300 mt-1 px-1">
                                    <span>1<br></span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5<br></span>
                                </div>
                            </div>
                            <p class="mt-5">I find the visualization easy to comprehend.</p>
                            <div class="w-full max-w-md mx-auto">
                                <input type="range" min="1" max="5" step="1" v-model="ratings.q3" list="tickmarks"
                                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:bg-gray-700" />
                                <datalist id="tickmarks" class="flex justify-between w-full px-[2px]">
                                    <option value="1" label="1"></option>
                                    <option value="2" label="2"></option>
                                    <option value="3" label="3"></option>
                                    <option value="4" label="4"></option>
                                    <option value="5" label="5"></option>
                                </datalist>
                                <div class="flex justify-between text-sm text-gray-600 dark:text-gray-300 mt-1 px-1">
                                    <span>1<br></span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5<br></span>
                                </div>
                            </div>
                            <p class="mt-5">I find the visualization well organized.</p>
                            <div class="w-full max-w-md mx-auto">
                                <input type="range" min="1" max="5" step="1" v-model="ratings.q4" list="tickmarks"
                                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:bg-gray-700" />
                                <datalist id="tickmarks" class="flex justify-between w-full px-[2px]">
                                    <option value="1" label="1"></option>
                                    <option value="2" label="2"></option>
                                    <option value="3" label="3"></option>
                                    <option value="4" label="4"></option>
                                    <option value="5" label="5"></option>
                                </datalist>
                                <div class="flex justify-between text-sm text-gray-600 dark:text-gray-300 mt-1 px-1">
                                    <span>1<br></span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5<br></span>
                                </div>
                            </div>
                            <p class="mt-5">I find this visualization easy to use.</p>
                            <div class="w-full max-w-md mx-auto">
                                <input type="range" min="1" max="5" step="1" v-model="ratings.q5" list="tickmarks"
                                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:bg-gray-700" />
                                <datalist id="tickmarks" class="flex justify-between w-full px-[2px]">
                                    <option value="1" label="1"></option>
                                    <option value="2" label="2"></option>
                                    <option value="3" label="3"></option>
                                    <option value="4" label="4"></option>
                                    <option value="5" label="5"></option>
                                </datalist>
                                <div class="flex justify-between text-sm text-gray-600 dark:text-gray-300 mt-1 px-1">
                                    <span>1<br></span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5<br></span>
                                </div>
                            </div>
                            <p class="mt-5">I feel irritated by this visualization.</p>
                            <div class="w-full max-w-md mx-auto">
                                <input type="range" min="1" max="5" step="1" v-model="ratings.q6" list="tickmarks"
                                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:bg-gray-700" />
                                <datalist id="tickmarks" class="flex justify-between w-full px-[2px]">
                                    <option value="1" label="1"></option>
                                    <option value="2" label="2"></option>
                                    <option value="3" label="3"></option>
                                    <option value="4" label="4"></option>
                                    <option value="5" label="5"></option>
                                </datalist>
                                <div class="flex justify-between text-sm text-gray-600 dark:text-gray-300 mt-1 px-1">
                                    <span>1<br></span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5<br></span>
                                </div>
                            </div>
                        </div>
                        <div v-else-if="step === 1">
                            <p class="mt-5">I find this visualization intuitive.</p>
                            <div class="w-full max-w-md mx-auto">
                                <input type="range" min="1" max="5" step="1" v-model="ratings.q7" list="tickmarks"
                                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:bg-gray-700" />
                                <datalist id="tickmarks" class="flex justify-between w-full px-[2px]">
                                    <option value="1" label="1"></option>
                                    <option value="2" label="2"></option>
                                    <option value="3" label="3"></option>
                                    <option value="4" label="4"></option>
                                    <option value="5" label="5"></option>
                                </datalist>
                                <div class="flex justify-between text-sm text-gray-600 dark:text-gray-300 mt-1 px-1">
                                    <span>1<br></span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5<br></span>
                                </div>
                            </div>
                            <p class="mt-5">I find the points in the visualization easy to distinguish.</p>
                            <div class="w-full max-w-md mx-auto">
                                <input type="range" min="1" max="5" step="1" v-model="ratings.q8" list="tickmarks"
                                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:bg-gray-700" />
                                <datalist id="tickmarks" class="flex justify-between w-full px-[2px]">
                                    <option value="1" label="1"></option>
                                    <option value="2" label="2"></option>
                                    <option value="3" label="3"></option>
                                    <option value="4" label="4"></option>
                                    <option value="5" label="5"></option>
                                </datalist>
                                <div class="flex justify-between text-sm text-gray-600 dark:text-gray-300 mt-1 px-1">
                                    <span>1<br></span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5<br></span>
                                </div>
                            </div>
                            <p class="mt-5">I find the visualization has poor pattern visibility.</p>
                            <div class="w-full max-w-md mx-auto">
                                <input type="range" min="1" max="5" step="1" v-model="ratings.q9" list="tickmarks"
                                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:bg-gray-700" />
                                <datalist id="tickmarks" class="flex justify-between w-full px-[2px]">
                                    <option value="1" label="1"></option>
                                    <option value="2" label="2"></option>
                                    <option value="3" label="3"></option>
                                    <option value="4" label="4"></option>
                                    <option value="5" label="5"></option>
                                </datalist>
                                <div class="flex justify-between text-sm text-gray-600 dark:text-gray-300 mt-1 px-1">
                                    <span>1<br></span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5<br></span>
                                </div>
                            </div>
                            <p class="mt-5">I feel stressed by the visualization.</p>
                            <div class="w-full max-w-md mx-auto">
                                <input type="range" min="1" max="5" step="1" v-model="ratings.q10" list="tickmarks"
                                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:bg-gray-700" />
                                <datalist id="tickmarks" class="flex justify-between w-full px-[2px]">
                                    <option value="1" label="1"></option>
                                    <option value="2" label="2"></option>
                                    <option value="3" label="3"></option>
                                    <option value="4" label="4"></option>
                                    <option value="5" label="5"></option>
                                </datalist>
                                <div class="flex justify-between text-sm text-gray-600 dark:text-gray-300 mt-1 px-1">
                                    <span>1<br></span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5<br></span>
                                </div>
                            </div>
                            <p class="mt-5">I can detect patterns in the visualization.</p>
                            <div class="w-full max-w-md mx-auto">
                                <input type="range" min="1" max="5" step="1" v-model="ratings.q11" list="tickmarks"
                                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:bg-gray-700" />
                                <datalist id="tickmarks" class="flex justify-between w-full px-[2px]">
                                    <option value="1" label="1"></option>
                                    <option value="2" label="2"></option>
                                    <option value="3" label="3"></option>
                                    <option value="4" label="4"></option>
                                    <option value="5" label="5"></option>
                                </datalist>
                                <div class="flex justify-between text-sm text-gray-600 dark:text-gray-300 mt-1 px-1">
                                    <span>1<br></span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5<br></span>
                                </div>
                            </div>
                        </div>
                        <div v-else-if="step === 2">
                            <p class="mt-5">I find the visualization is poorly designed.</p>
                            <div class="w-full max-w-md mx-auto">
                                <input type="range" min="1" max="5" step="1" v-model="ratings.q12" list="tickmarks"
                                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:bg-gray-700" />
                                <datalist id="tickmarks" class="flex justify-between w-full px-[2px]">
                                    <option value="1" label="1"></option>
                                    <option value="2" label="2"></option>
                                    <option value="3" label="3"></option>
                                    <option value="4" label="4"></option>
                                    <option value="5" label="5"></option>
                                </datalist>
                                <div class="flex justify-between text-sm text-gray-600 dark:text-gray-300 mt-1 px-1">
                                    <span>1<br></span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5<br></span>
                                </div>
                            </div>
                            <p class="mt-5">I find the visualization is missing important details.</p>
                            <div class="w-full max-w-md mx-auto">
                                <input type="range" min="1" max="5" step="1" v-model="ratings.q13" list="tickmarks"
                                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:bg-gray-700" />
                                <datalist id="tickmarks" class="flex justify-between w-full px-[2px]">
                                    <option value="1" label="1"></option>
                                    <option value="2" label="2"></option>
                                    <option value="3" label="3"></option>
                                    <option value="4" label="4"></option>
                                    <option value="5" label="5"></option>
                                </datalist>
                                <div class="flex justify-between text-sm text-gray-600 dark:text-gray-300 mt-1 px-1">
                                    <span>1<br></span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5<br></span>
                                </div>
                            </div>
                            <p class="mt-5">I find this visualization familiar.</p>
                            <div class="w-full max-w-md mx-auto">
                                <input type="range" min="1" max="5" step="1" v-model="ratings.q14" list="tickmarks"
                                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:bg-gray-700" />
                                <datalist id="tickmarks" class="flex justify-between w-full px-[2px]">
                                    <option value="1" label="1"></option>
                                    <option value="2" label="2"></option>
                                    <option value="3" label="3"></option>
                                    <option value="4" label="4"></option>
                                    <option value="5" label="5"></option>
                                </datalist>
                                <div class="flex justify-between text-sm text-gray-600 dark:text-gray-300 mt-1 px-1">
                                    <span>1<br></span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5<br></span>
                                </div>
                            </div>
                            <p class="mt-5">I find that the visualization needs additional graphics to communicate
                                effectively.</p>
                            <div class="w-full max-w-md mx-auto">
                                <input type="range" min="1" max="5" step="1" v-model="ratings.q15" list="tickmarks"
                                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:bg-gray-700" />
                                <datalist id="tickmarks" class="flex justify-between w-full px-[2px]">
                                    <option value="1" label="1"></option>
                                    <option value="2" label="2"></option>
                                    <option value="3" label="3"></option>
                                    <option value="4" label="4"></option>
                                    <option value="5" label="5"></option>
                                </datalist>
                                <div class="flex justify-between text-sm text-gray-600 dark:text-gray-300 mt-1 px-1">
                                    <span>1<br></span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5<br></span>
                                </div>
                            </div>
                            <p class="mt-5">I cannot distinguish between colors.</p>
                            <div class="w-full max-w-md mx-auto">
                                <input type="range" min="1" max="5" step="1" v-model="ratings.q16" list="tickmarks"
                                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:bg-gray-700" />
                                <datalist id="tickmarks" class="flex justify-between w-full px-[2px]">
                                    <option value="1" label="1"></option>
                                    <option value="2" label="2"></option>
                                    <option value="3" label="3"></option>
                                    <option value="4" label="4"></option>
                                    <option value="5" label="5"></option>
                                </datalist>
                                <div class="flex justify-between text-sm text-gray-600 dark:text-gray-300 mt-1 px-1">
                                    <span>1<br></span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5<br></span>
                                </div>
                            </div>
                        </div>

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

export default {
    name: 'CollectingTerms',
    data() {
        return {
            step: 0,
            userID: null,
            ratings: {
                q1: "3", q2: "3", q3: "3", q4: "3",
                q5: "3", q6: "3", q7: "3", q8: "3",
                q9: "3", q10: "3", q11: "3", q12: "3",
                q13: "3", q14: "3", q15: "3", q16: "3",
            },
            isSubmitting: false,
        };
    },

    mounted() {
        this.userID = sessionStorage.getItem("userID");

        if (!this.userID) {
            alert("User ID not found. Please fill out the background information first.");
            this.$router.push('/BackgroundView');
        }
    },
    methods: {
        nextStep() {

            this.step++;
            if (this.step > 2) {
                console.log("Current ratings object:", JSON.stringify(this.ratings));
                const allIds = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'q11', 'q12', 'q13', 'q14', 'q15', 'q16'];
                const allAnswered = allIds.every(id => this.ratings[id] !== null && this.ratings[id] !== undefined);
                console.log("All answered?", allAnswered);
                if (!allAnswered) {
                    alert("Please answer all statements before continuing.");
                    this.step = 2; // stay on last step
                    return;
                }
                sessionStorage.setItem("ratings", JSON.stringify(this.ratings));
                this.$router.push('/PostQuestionnaire');
            }
        }
    }
}
</script>
