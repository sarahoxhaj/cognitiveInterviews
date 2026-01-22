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

                <div class="flex justify-end -mt-5">
                    <button @click.prevent="showOption1 = !showOption1" type="submit"
                        class="bg-sky-900 hover:bg-sky-800 text-white px-4 py-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto text-center">
                        change images
                    </button>
                </div>
            </div>

            <!-- option 1 -->
            <div v-if="showOption1">
                <div class="flex justify-center space-x-4 px-16 mt-6">
                    <img @click="openImage(require('@/assets/2.4.png'))" src="@/assets/2.4.png" alt="Image 1"
                        class="w-[15rem] h-[11rem]">
                    <img @click="openImage(require('@/assets/2.3.png'))" src="@/assets/2.3.png" alt="Image 2"
                        class="w-[14rem] h-[11rem]">
                    <img @click="openImage(require('@/assets/2.7.png'))" src="@/assets/2.7.png" alt="Image 3"
                        class="w-[15rem] h-[11rem]">
                </div> <br>
                <div class="flex justify-center space-x-4 px-16 mb-10">
                    <img @click="openImage(require('@/assets/2.11.png'))" src="@/assets/2.11.png" alt="Image 4"
                        class="w-[15rem] h-[11rem]">
                    <img @click="openImage(require('@/assets/1.1.png'))" src="@/assets/1.1.png" alt="Image 5"
                        class="w-[15rem] h-[12rem]">
                    <img @click="openImage(require('@/assets/1.2.png'))" src="@/assets/1.2.png" alt="Image 6"
                        class="w-[16rem] h-[12rem]">
                </div>
            </div>

            <!-- option 2 -->
            <div v-else>
                <div class="flex justify-center space-x-4 px-16 mt-6">
                    <img @click="openImage(require('@/assets/2.1.png'))" src="@/assets/2.1.png" alt="Image 1"
                        class="w-[14rem] h-[11rem]">
                    <img @click="openImage(require('@/assets/2.10.png'))" src="@/assets/2.10.png" alt="Image 3"
                        class="w-[15rem] h-[11rem]">
                    <img @click="openImage(require('@/assets/2.2.png'))" src="@/assets/2.2.png" alt="Image 2"
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
            </div>

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
                            <th scope="col" class="px-6 py-3 font-medium">

                            </th>
                            <th scope="col" class="px-6 py-3 font-medium">
                                1: not at all relevant
                            </th>
                            <th scope="col" class="px-6 py-3 font-medium">
                                2
                            </th>
                            <th scope="col" class="px-6 py-3 font-medium">
                                3
                            </th>
                            <th scope="col" class="px-6 py-3 font-medium">
                                4
                            </th>
                            <th scope="col" class="px-6 py-3 font-medium">
                                5: very relevant
                            </th>
                        </tr>
                    </thead>
                    <tbody class>
                        <tr class="bg-neutral-primary border-b border-default ">
                            <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap text-right">
                                I find the amount of visual elements distracting.
                            </th>
                            <td class="px-6 py-4 flex justify-center">
                                <label class="flex items-center dark:text-white -ml-16">
                                    <input v-model="ratings.q1" type="radio" name="q1" value="1" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white -ml-1">
                                    <input v-model="ratings.q1" type="radio" name="q1" value="2" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white">
                                    <input v-model="ratings.q1" type="radio" name="q1" value="3" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white -ml-1">
                                    <input v-model="ratings.q1" type="radio" name="q1" value="4" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4 flex justify-center">
                                <label class="flex items-center dark:text-white -ml-16">
                                    <input v-model="ratings.q1" type="radio" name="q1" value="5" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                        </tr>

                        <tr class="bg-neutral-primary border-b border-default ">
                            <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap text-right">
                                I find the visualization occludes information.
                            </th>
                            <td class="px-6 py-4 flex justify-center">
                                <label class="flex items-center dark:text-white -ml-16">
                                    <input v-model="ratings.q2" type="radio" name="q2" value="1" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white -ml-1">
                                    <input v-model="ratings.q2" type="radio" name="q2" value="2" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white">
                                    <input v-model="ratings.q2" type="radio" name="q2" value="3" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white -ml-1">
                                    <input v-model="ratings.q2" type="radio" name="q2" value="4" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4 flex justify-center">
                                <label class="flex items-center dark:text-white -ml-16">
                                    <input v-model="ratings.q2" type="radio" name="q2" value="5" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                        </tr>

                        <tr class="bg-neutral-primary border-b border-default ">
                            <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap text-right">
                                I find the visualization cluttered.
                            </th>
                            <td class="px-6 py-4 flex justify-center">
                                <label class="flex items-center dark:text-white -ml-16">
                                    <input v-model="ratings.q3" type="radio" name="q3" value="1" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white -ml-1">
                                    <input v-model="ratings.q3" type="radio" name="q3" value="2" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white">
                                    <input v-model="ratings.q3" type="radio" name="q3" value="3" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white -ml-1">
                                    <input v-model="ratings.q3" type="radio" name="q3" value="4" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4 flex justify-center">
                                <label class="flex items-center dark:text-white -ml-16">
                                    <input v-model="ratings.q3" type="radio" name="q3" value="5" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                        </tr>

                        <tr class="bg-neutral-primary border-b border-default ">
                            <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap text-right">
                                I find this visualization familiar.
                            </th>
                            <td class="px-6 py-4 flex justify-center">
                                <label class="flex items-center dark:text-white -ml-16">
                                    <input v-model="ratings.q4" type="radio" name="q4" value="1" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white -ml-1">
                                    <input v-model="ratings.q4" type="radio" name="q4" value="2" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white">
                                    <input v-model="ratings.q4" type="radio" name="q4" value="3" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white -ml-1">
                                    <input v-model="ratings.q4" type="radio" name="q4" value="4" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4 flex justify-center">
                                <label class="flex items-center dark:text-white -ml-16">
                                    <input v-model="ratings.q4" type="radio" name="q4" value="5" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                        </tr>

                        <tr class="bg-neutral-primary border-b border-default ">
                            <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap text-right">
                                I find this visualization easy to understand.
                            </th>
                            <td class="px-6 py-4 flex justify-center">
                                <label class="flex items-center dark:text-white -ml-16">
                                    <input v-model="ratings.q5" type="radio" name="q5" value="1" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white -ml-1">
                                    <input v-model="ratings.q5" type="radio" name="q5" value="2" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white">
                                    <input v-model="ratings.q5" type="radio" name="q5" value="3" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white -ml-1">
                                    <input v-model="ratings.q5" type="radio" name="q5" value="4" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4 flex justify-center">
                                <label class="flex items-center dark:text-white -ml-16">
                                    <input v-model="ratings.q5" type="radio" name="q5" value="5" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                        </tr>

                        <tr class="bg-neutral-primary border-b border-default ">
                            <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap text-right">
                                I find this visualization easy to interpret.
                            </th>
                            <td class="px-6 py-4 flex justify-center">
                                <label class="flex items-center dark:text-white -ml-16">
                                    <input v-model="ratings.q6" type="radio" name="q6" value="1" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white -ml-1">
                                    <input v-model="ratings.q6" type="radio" name="q6" value="2" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white">
                                    <input v-model="ratings.q6" type="radio" name="q6" value="3" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white -ml-1">
                                    <input v-model="ratings.q6" type="radio" name="q6" value="4" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4 flex justify-center">
                                <label class="flex items-center dark:text-white -ml-16">
                                    <input v-model="ratings.q6" type="radio" name="q6" value="5" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                        </tr>

                        <tr class="bg-neutral-primary border-b border-default ">
                            <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap text-right">
                                I find this visualization clear.
                            </th>
                            <td class="px-6 py-4 flex justify-center">
                                <label class="flex items-center dark:text-white -ml-16">
                                    <input v-model="ratings.q7" type="radio" name="q7" value="1" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white -ml-1">
                                    <input v-model="ratings.q7" type="radio" name="q7" value="2" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white">
                                    <input v-model="ratings.q7" type="radio" name="q7" value="3" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white -ml-1">
                                    <input v-model="ratings.q7" type="radio" name="q7" value="4" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4 flex justify-center">
                                <label class="flex items-center dark:text-white -ml-16">
                                    <input v-model="ratings.q7" type="radio" name="q7" value="5" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                        </tr>

                    </tbody>
                </table>

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
            ratings: {
                q1: null,
                q2: null,
                q3: null,
                q4: null,
                q5: null,
                q6: null,
                q7: null
            },
            additionalComment: "",
            showOption1: true
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
        async saveDataToFirebase() {
            for (const [, value] of Object.entries(this.ratings)) {
                if (value === null) {
                    alert("Please answer all statements before continuing.");
                    return;
                }
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
