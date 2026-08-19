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
                        <tr v-for="(label, key) in questionLabels" :key="key">
                            <td class="border-b py-1">{{ label }}</td>
                            <td class="border-b py-1 text-center">{{ getScoreLabel(ratings[key]) }}</td>
                        </tr>
                    </tbody>
                </table>
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
            },
            scoreLabels: {
                1: "Strongly Disagree",
                2: "Disagree",
                3: "Neutral",
                4: "Agree",
                5: "Strongly Agree",
            }
        };
    },
    methods: {
        getScoreLabel(score) {
            return this.scoreLabels[score] ?? score;
        }
    }
}
</script>