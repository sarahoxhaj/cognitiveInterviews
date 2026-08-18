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

    <div class="bg-gray-50 dark:bg-slate-600 flex flex-col items-center justify-center min-h-screen">
        <p class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white mt-14">Visual Complexity in Data
            Visualizations</p>
        <p class="mt-5 max-w-5xl text-center dark:text-white">
            Do you notice when a design or image feels <i>"too much"</i> to look at? We want to find out what makes it
            feel that way. <br>Our goal is to develop a scale that can be used to evaluate the visual complexity of a
            data
            visualization.</p>
        <p class="mt-5 max-w-5xl text-center dark:text-white">
            <b>In this survey you will</b> be asked to rate 16 statements from <i>strongly disagree</i>
            to <i>strongly agree</i> and say out loud what you are thinking as you are rating each statement. Before
            starting, you will complete a short task only to get familiar with this method. The full session
            (excluding the training task) will be audio and screen-recorded. This is done only for data
            collection
            and quality-review purposes.
        </p>

        <p class="mt-5">Taking part is <b>voluntary</b>, and you can stop aty any time without giving a reason. If
            you choose to stop, your data will <br>not be included in the analysis and there will be no consequences.
        </p>

        <p class="mt-5">We <b>do not collect</b> any information that can <b>identify</b> you, such as your name or
            email address. However, because the conversation <br>is recorded, your voice may be recognizable to the
            research team. Only the research team will have access to the recordings, and they <br>will be deleted after
            the analysis is complete. Any results shared publicly will be anonymized and will not include the
            recordings.</p>

        <p class="mt-5 dark:text-white">
            If you are interested to continue and:<br>
        </p>
        <div class="mt-2 dark:text-white max-w-xl mx-auto text-left">
            • are 18 years or older, <br>
            • have a high school education or higher, and <br>
            • feel comfortable answering questions in English
        </div>
        <p class="mt-5 dark:text-white font-medium">Please click <button @click.prevent="goToConsentForm" type="submit"
                class="ml-2 mr-2 py-2 px-2 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-black dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-400">Next</button>
        </p>
    </div>

</template>

<script>
export default {
    name: 'FirstView',
    methods: {
        goToConsentForm() {
            this.$router.replace({ name: 'BackgroundView' });
            this.$nextTick(() => window.scrollTo(0, 0));
        }
    }
}
</script>