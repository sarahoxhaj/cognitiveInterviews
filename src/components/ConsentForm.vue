<template>

    <div class="bg-gray-50 dark:bg-slate-600 flex flex-col min-h-screen">
        <p class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white mt-7 text-center">Consent form</p>
        <div class="text-left px-24 dark:text-white">
            <!-- <p><b>Introduction</b></p>
            <p>You are invited to participate in a study titled "A Validated Scale for Visual Complexity in
                Visualization". The
                purpose of this research study is to develop a validated scale for measuring the visual complexity of
                data visualization. This study is conducted by:</p> 
            <p class="pl-6 mt-2">• Sara Hoxhaj (University of Vienna)<br></p>
            <p class="pl-6">• Torsten Möller (University of Vienna)<br></p>
            <p class="pl-6">• Laura Koesten (University of Vienna)<br></p>
            <p class="pl-6">• Petra Isenberg (University of Paris-Saclay)<br></p>
            <p class="pl-6">• Tobias Isenberg (University of Paris-Saclay)<br></p>
            <p class="pl-6">• Anne-Flore Cabouat (University of Paris-Saclay)<br></p> -->
            <!-- <p class="mt-2"><b>Who can participate?</b></p>
            <p>Anyone ...</p>
            <p class="pl-6">• who is fluent in English</p>
            <p class="pl-6">• is 18 years or older, and</p>
            <p class="pl-6">• considers himself/herself an expert on the topic of visualization</p> -->
            <p class="mt-2"><b>What Participation Involves</b></p>
            <p>This study is part of a research project evaluating how people perceive the visual complexity of a data
                visualization. The session is a cognitive interview and will take approximately 30 minutes.<br>
                Participation involves a think-aloud task, where you will be asked to verbalize your thoughts while
                rating
                16 items on a Likert scale evaluating visual complexity. Before the main task, you will complete a
                short training exercise to get familiar with the think-aloud method. This part is not analyzed as data.
                The full session (excluding the training task) will be <u>audio and screen-recorded</u> for data
                collection
                and quality-review purposes. The survey also includes a brief background questionnaire.
            </p>
            <p class="mt-2"><b>Voluntariness of participation</b></p>
            <p>Participation is voluntary. You may stop participating at any time without giving a reason. If you
                withdraw, your data will not be included in the analysis, and there will be no consequences.</p>
            <p class="mt-2"><b>Anonymity and Confidentiality</b></p>
            <p>We do not collect any personal identifying information such as your name or email. However, because the
                session includes audio and screen recording, your voice (and any content visible on the screen) may be
                identifiable to the research team. Only the research team will have access to the raw recordings, which
                will be stored securely and deleted after the analysis phase is complete.
                Any results shared publicly will be anonymized and will not include identifiable
                audio, video, or screen content.</p>
            <p class="mt-2"><b>Risks/Discomforts</b></p>
            <p>This research study involves minimal risk. The main risk is the small possibility of a data breach, which
                we minimize by not collecting any personal identifying information and storing data securely on
                password-protected computers. Study results will be published in an academic paper and
                anonymized responses may be shared publicly.</p>
            <p class="mt-2"><b>Compensation</b></p>
            <p>Participants will receive no compensation for their participation.</p>
            <p class="mt-2"><b>Contact details</b></p>
            <p>Please feel free to contact one of the six researchers below if you wish to know more about the study,
                or if you have any questions:</p>
            <div class="flex justify-between w-full mt-2">
                <div>
                    <p><b>Sara Hoxhaj</b></p> <a href="mailto:a12242040@unet.univie.ac.at"
                        class="font-medium text-blue-600 dark:text-amber-300 hover:underline">a12242040@unet.univie.ac.at</a>
                </div>
                <div>
                    <p><b>Torsten Möller</b></p> <a href="mailto:torsten.moeller@univie.ac.at"
                        class="font-medium text-blue-600 dark:text-amber-300 hover:underline">torsten.moeller@univie.ac.at</a>
                </div>
                <div>
                    <p><b>Laura Koesten</b></p> <a href="mailto:laura.koesten@univie.ac.at"
                        class="font-medium text-blue-600 dark:text-amber-300 hover:underline">laura.koesten@univie.ac.at</a>
                </div>
                <div>
                    <p><b>Petra Isenberg</b></p> <a href="mailto:petra.isenberg@inria.fr"
                        class="font-medium text-blue-600 dark:text-amber-300 hover:underline">petra.isenberg@inria.fr</a>
                </div>
                <div>
                    <p><b>Tobias Isenberg</b></p> <a href="mailto:tobias.isenberg@inria.fr"
                        class="font-medium text-blue-600 dark:text-amber-300 hover:underline">tobias.isenberg@inria.fr</a>
                </div>
                <div>
                    <p><b>Anne-Flore Cabouat</b></p> <a href="mailto:anne-flore.cabouat@inria.fr"
                        class="font-medium text-blue-600 dark:text-amber-300 hover:underline">anne-flore.cabouat@inria.fr</a>
                </div>
            </div>
            <div class="mt-6 bg-sky-900 rounded-lg py-4">
                <p class="px-2">
                    <span class="text-red-500 text-2xl">* </span>
                    <span class="text-white">Please confirm that you wish to participate in this study.</span>
                </p>
                <p class="text-white px-2">By clicking the <b>Yes</b> button below, you certify they you have read and
                    understood the above information, that you meet the various selection criteria, that your questions
                    have been answered satisfactorily, and that you have been advised that you are free to withdraw from
                    this research at any time, without any consequence.</p>
                <div class="flex items-center space-x-4 px-2 ml-4 text-white mt-3">
                    <label class="flex items-center">
                        <input type="radio" name="choice" value="yes" class="mr-2">
                        Yes
                    </label>
                    <label class="flex items-center">
                        <input type="radio" name="choice" value="no" class="mr-2">
                        No
                    </label>
                </div>
            </div>
            <div class="mt-5 pb-6">
                <button @click.prevent="goToBackgroundView" type="submit"
                    class="bg-sky-900 hover:bg-sky-800 text-white px-4 py-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
            </div>
        </div>
    </div>
</template>

<script>3
export default {
    name: 'ConsentForm',
    methods: {
        goToBackgroundView() {
            const selectedChoice = document.querySelector('input[name="choice"]:checked');
            if (selectedChoice && selectedChoice.value === "yes") {
                // this.$router.push('/BackgroundView');
                this.$router.replace({ name: 'BackgroundView' });
                this.$nextTick(() => window.scrollTo(0, 0));
            } else {
                alert('You cannot proceed if you do not click "Yes".');
            }
        }
    }
}
</script>