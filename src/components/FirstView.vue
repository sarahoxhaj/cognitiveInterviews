<template>

    <!-- <div class="bg-gray-50 dark:bg-slate-600 flex flex-col items-center justify-center min-h-screen text-center px-4">

        <p class="mb-6 text-2xl tracking-tight text-gray-900 dark:text-white">
            Visual Complexity in Data Visualizations: Item Evaluation Study
        </p>

        <div class="max-w-lg mx-auto border-2 border-blue-200 p-6 rounded-md dark:text-white">
            <p>
                The survey period has ended, but we truly appreciate your willingness to participate.
            </p>
            <br>
            <p>
                For further information please contact:
            </p>
            <p class="mt-2 dark:text-white">
                <a href="mailto:torsten.moeller@univie.ac.at" class="hover:text-blue-500">
                    • Torsten Möller (University of Vienna)
                </a> &nbsp; or <br>
                <a href="mailto:a12242040@unet.univie.ac.at" class="hover:text-blue-500">
                    • Sara Hoxhaj (University of Vienna)
                </a>
            </p>
        </div>

    </div> -->

    <div class="bg-gray-50 dark:bg-slate-600 flex flex-col items-center justify-start min-h-screen">
        <p class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white mt-14">Visual Complexity in Data
            Visualizations: Scale Development</p>
        <p class="mt-5 max-w-5xl text-center dark:text-white">
            You are invited to participate in our study that contributes to the project "A Validated Scale for Visual
            Complexity in
            Data Visualizations". <br>
            Our goal is to develop a validated scale that can be used to evaluate the visual complexity of a data
            visualization.</p>
        <p class="mt-5 max-w-5xl text-center dark:text-white
            ">
            <b>What this involves:</b> a ~30-minute online session where you will think aloud while rating a data
            visualization. <br>The session will be audio- and screen-recorded.
        </p>
        <p class="mt-5 dark:text-white">
            Please respond to this survey only if you:<br>
        </p>
        <div class="mt-2 dark:text-white max-w-xl mx-auto text-left">
            • are fluent in English, and <br>
            • are 18 years or older.
        </div>

        <p class="mt-7 dark:text-white">
            This study is conducted by:<br>
        </p>
        <div class="mt-2 dark:text-white max-w-xl mx-auto text-left">
            • <a href="mailto:a12242040@unet.univie.ac.at" class="hover:text-blue-500">Sara Hoxhaj (University of
                Vienna)</a><br>
            • <a href="mailto:torsten.moeller@univie.ac.at" class="hover:text-blue-500">Torsten Möller (University of
                Vienna)</a><br>
            • <a href="mailto:laura.koesten@univie.ac.at" class="hover:text-blue-500">Laura Koesten (University of
                Vienna)</a><br>
            • <a href="mailto:petra.isenberg@inria.fr" class="hover:text-blue-500">Petra Isenberg (University of
                Paris-Saclay)</a><br>
            • <a href="mailto:tobias.isenberg@inria.fr" class="hover:text-blue-500">Tobias Isenberg (University of
                Paris-Saclay)</a><br>
            • <a href="mailto:anne-flore.cabouat@inria.fr" class="hover:text-blue-500">Anne-Flore Cabouat (University of
                Paris-Saclay)</a>
        </div>
        <p class="mt-4 dark:text-white">Click <button @click.prevent="goToConsentForm" type="submit"
                class="ml-2 mr-2 py-2 px-2 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700  dark:text-black dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-400">Next</button>
            if you are interested to continue.</p>
    </div>

</template>

<script>
export default {
    name: 'FirstView',
    methods: {
        goToConsentForm() {
            // this.$router.push('/ConsentForm');
            this.$router.replace({ name: 'ConsentForm' });
            this.$nextTick(() => window.scrollTo(0, 0));
        }
    }
}
</script>