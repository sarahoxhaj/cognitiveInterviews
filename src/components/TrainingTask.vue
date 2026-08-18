<template>

    <div class="bg-gray-50 dark:bg-slate-600 flex flex-col min-h-screen items-center justify-center">
        <p class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white text-center">Practice Time!
        </p>
        <div class="text-left px-24 dark:text-white">
            <!-- <p class="mt-5"> Please take a look at the data visualization below
                and rate the item using the Likert scale from <b>1 (completely disagree)</b> to <b>5 (completely
                    agree)</b>.<br>
                As this is a think-aloud session, please say out loud everything you are thinking as you decide to
                answer: your reasoning, any confusion, anything that comes to mind.
            </p> -->

            <div class="flex flex-row items-center justify-center gap-x-20">
                <div class="shrink-0">
                    <img src="@/assets/statista.jpeg" alt="Image 1" class="size-[500px] mt-10">
                </div>

                <div class="max-w-2xl">
                    <p class="mt-5 mb-5">I can easily find the average wedding cost in Spain in this visualization.</p>
                    <div class="w-full max-w-md mx-auto">
                        <input type="range" min="1" max="5" step="1" list="tickmarks" v-model="practiceRating"
                            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:bg-gray-700" />
                        <datalist id="tickmarks" class="flex justify-between w-full px-[2px]">
                            <option value="1"></option>
                            <option value="2"></option>
                            <option value="3"></option>
                            <option value="4"></option>
                            <option value="5"></option>
                        </datalist>
                        <div class="flex justify-between text-sm text-gray-600 dark:text-gray-300 mt-1 px-[9px]">
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                        </div>
                        <div class="flex justify-between text-xs text-gray-800 dark:text-gray-400 mt-0.5 px-[9px]">
                            <span>Strongly <br>disagree</span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span>Strongly <br>agree</span>
                        </div>
                    </div>
                    <div class="mt-20 text-center"> Please click
                        <button @click.prevent="goToBackgroundView" type="submit"
                            class="ml-2 mr-2 py-2 px-2 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-black dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-400">Next</button>
                        to continue with the survey.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>3
export default {
    name: 'ConsentForm',
    data() {
        return {
            practiceRating: "3",
        };
    },
    methods: {
        goToBackgroundView() {

            sessionStorage.setItem("practiceRating", this.practiceRating);

            this.$router.replace({ name: 'ItemValidation' });
            this.$nextTick(() => window.scrollTo(0, 0));
        }
    }
}
</script>