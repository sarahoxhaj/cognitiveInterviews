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
                                    <span class="h-5">Not Relevant</span>
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
                                    <span class="h-5">Very Relevant</span>
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
                                {{ question.text }}
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
                <button @click.prevent="saveDataToFirebase" type="submit"
                    class="bg-sky-900 hover:bg-sky-800 text-white px-4 py-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
            currentPage: 1,
            rowsPerPage: 10, // sentences per page
            questions: [
                { id: 'q1', text: 'I find the amount of visual elements distracting.' },
                { id: 'q2', text: 'I find the visualization occludes information.' },
                { id: 'q3', text: 'I find the visualization cluttered.' },
                { id: 'q4', text: 'I find this visualization familiar.' },
                { id: 'q5', text: 'I find this visualization easy to understand.' },
                { id: 'q6', text: 'I find this visualization easy to interpret.' },
                { id: 'q7', text: 'I find this visualization clear.' },
                { id: 'q8', text: 'I feel confident about this visualization.' },
                { id: 'q9', text: 'I find this visualization difficult to read.' },
                { id: 'q10', text: 'I feel confused by the visualization.' },
                { id: 'q11', text: 'I feel overwhelmed by the visualization.' },
                { id: 'q12', text: 'I feel curious about this visualization.' },
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
                return;
            }


            try {
                const userData = {
                    id: this.userID,
                    gender: sessionStorage.getItem("gender"),
                    age: sessionStorage.getItem("age"),
                    years: sessionStorage.getItem("years")
                };

                await addDoc(collection(db, "userData"), userData);
                console.log("User info saved:", userData);

                const ratingsData = {
                    userID: this.userID,
                    ratings: this.ratings,
                    additionalComment: this.additionalComment
                };

                await addDoc(collection(db, "item-validation"), ratingsData);
                console.log("Ratings successfully saved:", ratingsData);

                this.$router.push('/LastView');

            } catch (error) {
                console.error("Error saving data:", error);
                alert("There was an error saving your data. Please try again.");
            }
        }
    }
}
</script>
