<template>

    <div class="bg-gray-50 dark:bg-slate-600 flex flex-col min-h-screen pb-8">
        <p class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white mt-7 text-center">Rating the relevance of
            statements to assess perceived visual complexity.</p>
        <div class="text-left px-24 mt-7 dark:text-white">
            <p> We would like you to rate different statements according to how relevant you consider them for judging a
                study participant's <b>perception of the visual complexity of a visualization.</b> Below are examples of
                visualizations which could be used as stimuli in such a study, but you can think
                of other data representations:</p>
            <div class="flex justify-center space-x-4 px-16">
                <img @click="openImage(require('@/assets/test.png'))" src="@/assets/test.png" alt="Image 1"
                    class="mt-5 cursor-pointer hover:scale-105 transition-transform duration-150 h-[12rem]">
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














        </div>
    </div>

    <div v-if="showImage" class="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
        <div class="relative">
            <img :src="currentImage" class="max-h-[90vh] max-w-[90vw] rounded shadow-lg" />
            <button @click="closeImage"
                class="absolute top-2 right-2 text-white bg-black bg-opacity-70 hover:bg-opacity-90 rounded-full w-10 h-10 text-xl font-bold flex items-center justify-center">
                ✕
            </button>
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
            statements: ["", "", ""],
            showImage: false,
            currentImage: "",
            additionalStatement: [],
        };
    },
    mounted() {
        this.userID = sessionStorage.getItem("userID");
        console.log(sessionStorage.getItem("userID"))

        if (!this.userID) {
            alert("User ID not found. Please fill out the background information first.");
            this.$router.push('/Background');
        }
    },
    methods: {
        openImage(imagePath) {
            this.currentImage = imagePath;
            this.showImage = true;
        },
        closeImage() {
            this.showImage = false;
            this.currentImage = "";
        },
        addStatement() {
            this.additionalStatement.push("");
        },
        async saveDataToFirebase() {
            try {
                const data = {
                    userID: this.userID,
                    statements: this.statements.filter(statement => statement.trim() !== ""),
                    additionalStatement: this.additionalStatement.filter(stmt => stmt.trim() !== "")
                };
                await addDoc(collection(db, "collectedData"), data);
                console.log("Data successfully saved to Firebase:", data);
            } catch (error) {
                console.error("Error saving data to Firebase:", error);
                alert("An error occurred while saving your data. Please try again.");
            }
        },
        async goToCollectingTerms() {
            const filledStatements = this.statements.filter(statement => statement.trim() !== "");

            if (filledStatements.length < 1) {
                alert("Please provide at least one statement before proceeding.");
            } else {
                sessionStorage.setItem("statements", JSON.stringify({
                    statements: this.statements.filter(s => s.trim() !== ""),
                    additionalStatement: this.additionalStatement.filter(s => s.trim() !== "")
                }));
                this.$router.push('/CollectingTerms');
                this.$nextTick(() => window.scrollTo(0, 0));
            }
        }
    }
}
</script>