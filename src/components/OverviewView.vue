<template>
    <div class="bg-gray-50 dark:bg-slate-600 flex flex-col items-center justify-center min-h-screen dark:text-white">
        <div class="flex flex-row justify-center items-center gap-x-10">
            <div>
                <img src="@/assets/1.png" alt="Image 1" class="size-[580px]">
            </div>
            <div>
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr>
                            <th class="border-b py-2">Statement</th>
                            <th class="border-b py-2 text-center">Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="([key, label]) in paginatedEntries" :key="key">
                            <td class="border-b py-1">{{ label }}</td>
                            <td class="border-b py-1 text-center">{{ getScoreLabel(ratings[key]) }}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="flex justify-center items-center gap-4 mt-3">
                    <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1"
                        class="px-3 py-1 text-sm rounded border disabled:opacity-40 disabled:cursor-not-allowed">
                        Previous
                    </button>
                    <!-- <span class="text-sm">Page {{ currentPage }} of {{ totalPages }}</span> -->
                    <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages"
                        class="px-3 py-1 text-sm rounded border disabled:opacity-40 disabled:cursor-not-allowed">
                        Next
                    </button>
                </div>
                <div class="mt-8 text-center"> Do you feel any items are missing from this list? Check them out
                    <button @click.prevent="goToOtherItems" type="submit"
                        class="py-2 px-2 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-black dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-400">here</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ResultsView',
    data() {
        return {
            ratings: JSON.parse(sessionStorage.getItem("ratings") || "{}"),
            currentPage: 1,
            itemsPerPage: 13,
            questionLabels: {
                q1: "I find this visualization easy to interpret.",
                q2: "I find this visualization easy to understand.",
                q3: "I find the visualization easy to comprehend.",
                q4: "I find the visualization well organized.",
                q5: "I find this visualization easy to use.",
                q6: "I feel irritated by this visualization.",
                q7: "I find this visualization intuitive.",
                q8: "I find the points in the visualization easy to distinguish.",
                q9: "I find the visualization has poor pattern visibility.",
                q10: "I feel stressed by the visualization.",
                q11: "I can detect patterns in the visualization.",
                q12: "I find the visualization is poorly designed.",
                q13: "I find the visualization is missing important details.",
                q14: "I find this visualization familiar.",
                q15: "I find that the visualization needs additional graphics to communicate effectively.",
                q16: "I cannot distinguish between colors.",
                q17: "I feel overwhelmed by the visualization.",
                q18: "I feel curious about this visualization.",
                q19: "I feel confident about this visualization.",
                q20: "I feel informed by the visualization.",
                q21: "I feel confused by the visualization.",
                q22: "I feel engaged with the visualization.",
                q23: "I feel the mental demand of this visualization is high.",
                q24: "I find many visual elements distracting.",
                q25: "I find the visualization type requires higher cognitive effort.",
                q26: "I feel that this visualization causes cognitive overload.",
            },
            scoreLabels: {
                1: "Strongly Disagree",
                2: "Disagree",
                3: "Neutral",
                4: "Agree",
                5: "Strongly Agree",
                DK: "I don't know",
            }
        };
    },
    methods: {
        getScoreLabel(score) {
            return this.scoreLabels[score] ?? score;
        },
        goToOtherItems() {
            this.$router.replace({ name: 'OtherItems' });
            this.$nextTick(() => window.scrollTo(0, 0));
        },
        goToPage(page) {
            this.currentPage = page;
        },
    },
    computed: {
        totalPages() {
            return Math.ceil(Object.keys(this.questionLabels).length / this.itemsPerPage);
        },
        paginatedEntries() {
            const entries = Object.entries(this.questionLabels);
            const start = (this.currentPage - 1) * this.itemsPerPage;
            return entries.slice(start, start + this.itemsPerPage);
        }
    }
}
</script>