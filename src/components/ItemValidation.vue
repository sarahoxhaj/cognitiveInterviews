<template>

    <div class="bg-gray-50 dark:bg-slate-600 flex flex-col min-h-screen pb-8">
        <p class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white mt-7 text-center">Rating the relevance of
            statements to assess perceived visual complexity.</p>

        <div class="text-left px-24 mt-7 dark:text-white">
            <div>
                <p> We would like you to rate different statements according to how relevant you consider them for
                    judging a
                    study participant's <b>perception of the visual complexity of a visualization.</b> Below are
                    examples of
                    visualizations which could be used as stimuli in such a study, but you can think
                    of other data representations:</p>

                <!-- <div class="flex justify-end -mt-5">
                    <button @click.prevent="showOption1 = !showOption1" type="submit"
                        class="bg-sky-900 hover:bg-sky-800 text-white px-4 py-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto text-center">
                        change images
                    </button>
                </div> -->
            </div>

            <!-- option 1 -->
            <div>
                <div class="flex justify-center space-x-4 px-16 mt-6">
                    <img @click="openImage(require('@/assets/bar.png'))" src="@/assets/bar.png" alt="Image 1"
                        class="w-[15rem] h-[10rem] mt-2">
                    <img @click="openImage(require('@/assets/map.png'))" src="@/assets/map.png" alt="Image 2"
                        class="w-[16rem] h-[11rem]">
                    <img @click="openImage(require('@/assets/line.png'))" src="@/assets/line.png" alt="Image 3"
                        class="w-[17rem] h-[9rem] mt-4">
                </div> <br>
                <div class="flex justify-center space-x-4 px-16 mb-10">
                    <img @click="openImage(require('@/assets/spider.png'))" src="@/assets/spider.png" alt="Image 4"
                        class="w-[15rem] h-[11rem]">
                    <img @click="openImage(require('@/assets/1.1.png'))" src="@/assets/1.1.png" alt="Image 5"
                        class="w-[16rem] h-[12rem]">
                    <img @click="openImage(require('@/assets/scatterPlot.png'))" src="@/assets/scatterPlot.png"
                        alt="Image 6" class="w-[18rem] h-[10rem] mt-3">
                </div>
            </div>

            <!-- option 2 -->
            <!-- <div v-else>
                <div class="flex justify-center space-x-4 px-16 mt-6">
                    <img @click="openImage(require('@/assets/2.1.png'))" src="@/assets/2.1.png" alt="Image 1"
                        class="w-[14rem] h-[11rem]">
                    <img @click="openImage(require('@/assets/map.png'))" src="@/assets/map.png" alt="Image 3"
                        class="w-[15rem] h-[11rem]">
                    <img @click="openImage(require('@/assets/map.png'))" src="@/assets/map.png" alt="Image 2"
                        class="w-[14rem] h-[11rem]">
                </div> <br>
                <div class="flex justify-center space-x-4 px-16 mb-10 ml-8">
                    <img @click="openImage(require('@/assets/2.14.png'))" src="@/assets/2.14.png" alt="Image 4"
                        class="w-[13rem] h-[11rem]">
                    <img @click="openImage(require('@/assets/1.3.png'))" src="@/assets/1.3.png" alt="Image 6"
                        class="w-[13rem] h-[12rem]">
                    <img @click="openImage(require('@/assets/1.2.png'))" src="@/assets/1.2.png" alt="Image 5"
                        class="w-[17rem] h-[12rem]">
                </div>
            </div> -->

            <p class="mt-5">The table below includes statements generated from a combination of deductive and inductive
                methods to study the <b>perceived visual complexity of a visualization.</b> Imagine that these terms
                would
                later be used
                in a rating scale that you could give to participants as part of a visualization user study.</p> <br>
            <p>Please note that the goal is not to assess the overall
                system’s complexity, but <b>only the static view of a single visualization</b>, not its interactive
                features.
                While the terms <span class="text-red-500 dark:text-amber-300">visual complexity</span> and <span
                    class="text-red-500 dark:text-amber-300">visualization complexity</span> are closely related and
                often overlap, we
                clarify our scope here: </p>
            <p class="text-center mt-4 mx-12"> We are interested in how participants perceive the visual complexity of a
                single, static data visualization — <b>focusing only on its visual appearance</b>.</p><br>
            <p>Please also keep in mind that the statements should remain applicable for a great variety of data
                visualizations and easy to understand for non expert participants.</p>
            <p>Finally, note that the purpose of this survey is not <b>not</b> to select the final statements of the
                scale: we seek to assess the individual relevancy of each statement, so redundancy within the list is
                intentional at this stage.</p><br><br>
            <p>How relevant do you think the following terms are for describing the <b>perceived visual complexity of a
                    visualization?</b></p>


            <div
                class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default mt-10">
                <table class="w-full text-sm text-left rtl:text-right text-body">
                    <thead class="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                        <tr>
                            <th class="px-2 py-1 font-medium text-center font-medium"></th>


                            <th class="px-2 py-1 font-medium text-center">
                                <div class="flex flex-col items-center">
                                    <span class="h-5">not at all relevant</span>
                                    <span class="text-[15px]">1</span>
                                </div>
                            </th>

                            <th class="px-2 py-1 font-medium text-center">
                                <div class="flex flex-col items-center">
                                    <span class="h-5">&nbsp;</span>
                                    <span class="text-[15px]">2</span>
                                </div>
                            </th>

                            <th class="px-2 py-1 font-medium text-center">
                                <div class="flex flex-col items-center">
                                    <span class="h-5">&nbsp;</span>
                                    <span class="text-[15px]">3</span>
                                </div>
                            </th>

                            <th class="px-2 py-1 font-medium text-center">
                                <div class="flex flex-col items-center">
                                    <span class="h-5">&nbsp;</span>
                                    <span class="text-[15px]">4</span>
                                </div>
                            </th>

                            <th class="px-2 py-1 font-medium text-center">
                                <div class="flex flex-col items-center">
                                    <span class="h-5">very relevant</span>
                                    <span class="text-[15px]">5</span>
                                </div>
                            </th>
                        </tr>

                    </thead>

                    <tbody>
                        <tr v-for="question in paginatedQuestions" :key="question.id"
                            class="bg-neutral-primary border-b border-default">
                            <th scope="row"
                                class="px-6 py-4 font-medium text-heading whitespace-nowrap text-right align-middle">
                                <span v-html="question.text"></span>
                            </th>

                            <td v-for="value in 5" :key="value" class="px-6 py-4 align-middle text-center">
                                <input v-model="ratings[question.id]" type="radio" :name="question.id" :value="value"
                                    required class="w-6 h-6 mx-auto block scale-110">
                            </td>
                        </tr>
                    </tbody>



                </table>

                <div class="flex justify-center mt-2 space-x-2 mb-2">
                    <button @click="currentPage--" :disabled="currentPage === 1"
                        class="dark:border-white px-3 py-1 border rounded disabled:opacity-50 border-sky-800 font-semibold transition-colors duration-200 text-gray-700 hover:text-white hover:bg-sky-800 dark:text-white dark:hover:text-white dark:hover:bg-sky-800">Prev</button>

                    <button v-for="page in totalPages" :key="page" @click="currentPage = page" :class="['dark:border-white px-3 py-1 border border-sky-800 rounded font-semibold transition-colors duration-200 text-gray-700 hover:text-white hover:bg-sky-800 dark:text-white dark:hover:text-white dark:hover:bg-sky-800', currentPage === page
                        ? 'bg-sky-800 text-white'
                        : 'text-gray-700 dark:text-white']">
                        {{ page }} </button>

                    <button @click="currentPage++" :disabled="currentPage === totalPages"
                        class="px-3 py-1 border rounded disabled:opacity-50 border-sky-800 dark:border-white font-semibold transition-colors duration-200 text-gray-700 hover:text-white hover:bg-sky-800 dark:text-white dark:hover:text-white dark:hover:bg-sky-800">Next</button>
                </div>


            </div>

            <p class="mt-12">If you have any comments or suggestions related to this survey, please write them here.</p>
            <textarea v-model="additionalComment" id="additionalComment" rows="4"
                class="dark:text-black mt-4 rounded-lg px-0 w-full border border-gray-300 focus:ring-0 focus:outline-none dark:placeholder-gray-400 bg-gray-50"
                required></textarea>

            <div class="flex justify-end mt-10">
                <button @click.prevent="saveDataToFirebase" :disabled="isSubmitting"
                    class="bg-sky-900 hover:bg-sky-800 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Save
                </button>

            </div>

        </div>
    </div>


</template>

<script>
import { db } from '@/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default {
    name: 'CollectingTerms',
    data() {
        return {
            userID: null,
            ratings: {},
            additionalComment: "",
            showOption1: true,
            isSubmitting: false,
            currentPage: 1,
            rowsPerPage: 10, // sentences per page
            questions: [
                    { id: 'q1', text: 'I find many visual elements <strong>distracting</strong>.' },
                    { id: 'q2', text: 'I find the visualization <strong>occludes information</strong>.' },
                    { id: 'q3', text: 'I find the visualization <strong>cluttered</strong>.' },
                    { id: 'q4', text: 'I find this visualization <strong>familiar</strong>.' },
                    { id: 'q5', text: 'I find this visualization <strong>easy to understand</strong>.' },
                    { id: 'q6', text: 'I find this visualization <strong>easy to interpret</strong>.' },
                    { id: 'q7', text: 'I find that the structure is <strong>unclear</strong>.' },
                    { id: 'q8', text: 'I feel the main idea is <strong>not clear</strong> within the first few seconds.' },
                    { id: 'q9', text: 'I feel <strong>confident</strong> about this visualization.' },
                    { id: 'q10', text: 'I find this visualization <strong>difficult to read</strong>.' },
                    { id: 'q11', text: 'I feel <strong>confused</strong> by the visualization.' },
                    { id: 'q12', text: 'I feel <strong>overwhelmed</strong> by the visualization.' },
                    { id: 'q13', text: 'I feel <strong>curious</strong> about this visualization.' },
                    { id: 'q14', text: 'I feel <strong>irritated</strong> by this visualization.' },
                    { id: 'q15', text: 'I find there is <strong>a lot of information</strong> in this visualization.' },
                    { id: 'q16', text: 'I find this visualization <strong>easy to use</strong>.' },
                    { id: 'q17', text: 'I find this visualization <strong>intuitive</strong>.' },
                    { id: 'q18', text: 'I find this visualization <strong>visually pleasing</strong>.' },
                    { id: 'q19', text: 'I feel that this visualization causes <strong>cognitive overload</strong>.' },
                    { id: 'q20', text: 'I feel the <strong>mental demand</strong> of this visualization is high/low.' },
                    { id: 'q21', text: 'I find the <strong>color coding</strong> overly complex.' },
                    { id: 'q22', text: 'I find the <strong>visual encoding</strong> is poor and violates good practice.' },
                    { id: 'q23', text: 'I find this visualization <strong>attractive</strong>.' },
                    { id: 'q24', text: 'I find the visualization has <strong>unnecessary complexity</strong>.' },
                    { id: 'q25', text: 'I find the visualization <strong>easy to comprehend</strong>.' },
                    { id: 'q26', text: 'I find the visualization <strong>overloaded</strong>.' },
                    { id: 'q27', text: 'I find the <strong>large number of data items</strong> makes the visualization too complex.' },
                    { id: 'q28', text: 'I find the visualization <strong>dense</strong>.' },
                    { id: 'q29', text: 'I feel <strong>informed</strong> by the visualization.' },
                    { id: 'q30', text: 'I find the visualization has <strong>overlapping information</strong>.' },
                    { id: 'q31', text: 'I feel <strong>stressed</strong> by the visualization.' },
                    { id: 'q32', text: 'I find the <strong>visualization type</strong> requires higher cognitive effort.' },
                    { id: 'q33', text: 'I feel <strong>engaged</strong> with the visualization.' },
                    { id: 'q34', text: 'I find the visualization uses <strong>too many colors</strong>.' },
                    { id: 'q35', text: 'I find the visualization provides <strong>not enough context</strong>.' },
                    { id: 'q36', text: 'I find the visualization <strong>well organized</strong>.' },
                    { id: 'q37', text: 'I find the points in the visualization <strong>easy to distinguish</strong>.' },
                    { id: 'q38', text: 'I cannot <strong>distinguish between colors</strong>.' },
                    { id: 'q39', text: 'I find the visualization displays <strong>several dimensions at once</strong>.' },
                    { id: 'q40', text: 'I can <strong>detect patterns</strong> in the visualization.' },
                    { id: 'q41', text: 'I find the visualization is <strong>missing important details</strong>.' },
                    { id: 'q42', text: 'I find the visualization requires <strong>effort</strong> to understand.' },
                    { id: 'q43', text: 'I find the visualization has <strong>poor pattern visibility</strong>.' },
                    { id: 'q44', text: 'I find <strong>all data points are visible</strong> in the visualization.' },
                    { id: 'q45', text: 'I find the variables in the visualization <strong>visible</strong>.' },
                    { id: 'q46', text: 'I find the visualization is <strong>poorly designed</strong>.' },
                    { id: 'q47', text: 'I find the visualization has a <strong>complex visual appearance</strong>.' },
                    { id: 'q48', text: 'I find additional graphics would help in <strong>communication</strong>.' }
            ],
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.questions.length / this.rowsPerPage);
        },
        paginatedQuestions() {
            const start = (this.currentPage - 1) * this.rowsPerPage;
            const end = start + this.rowsPerPage;
            return this.questions.slice(start, end);
        }
    },


    mounted() {
        this.userID = sessionStorage.getItem("userID");

        if (!this.userID) {
            alert("User ID not found. Please fill out the background information first.");
            this.$router.push('/BackgroundView');
        }
    },
    methods: {
        async saveDataToFirebase() {
            // all questions answered
            const allAnswered = this.questions.every(q => this.ratings[q.id] !== undefined);
            if (!allAnswered) {
                alert("Please answer all statements before continuing.");
                return; // exit early without disabling button
            }

            if (this.isSubmitting) return; // prevent double clicks
            this.isSubmitting = true;

            try {
                const userData = {
                    id: this.userID,
                    gender: sessionStorage.getItem("gender"),
                    age: sessionStorage.getItem("age"),
                    years: sessionStorage.getItem("years")
                };

                await addDoc(collection(db, "userData"), userData);

                const ratingsData = {
                    userID: this.userID,
                    ratings: this.ratings,
                    additionalComment: this.additionalComment
                };

                await addDoc(collection(db, "item-validation"), ratingsData);

                this.$router.replace({ name: 'LastView' });

            } catch (error) {
                console.error("Error saving data:", error);
                alert("There was an error saving your data. Please try again.");
                this.isSubmitting = false; // re-enable button if error occurs
            }
        }

    }
}
</script>
