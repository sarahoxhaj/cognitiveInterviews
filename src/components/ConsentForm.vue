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
            <p>Completing this survey will take approximately 10 minutes. Please imagine that you are preparing a user
                study to evaluate the perceived visual complexity of data visualizations. In this study, participants
                would use a rating scale to describe how complex they perceive a visualization to be.
                The following statements are shown in a five-page table, with response options ranging from "not at all
                relevant" to "very relevant". Your task is to rate how relevant you think each statement is for
                assessing participants’ perception of a visualization’s visual complexity. The survey also includes a
                brief background questionnaire.</p>
            <p>For best experience, please complete this survey on a laptop or desktop computer (not on a phone or
                tablet).</p>
            <p class="mt-2"><b>Voluntariness of participation</b></p>
            <p>Participation is voluntary. You may stop participating at any time without giving a reason. If you
                withdraw, your data will not be included in the analysis, and there will be no consequences.</p>
            <p class="mt-2"><b>Anonymity and Confidentiality</b></p>
            <p>This study is anonymous - we do not require participants to provide any information that could identify
                them in the consent form nor in the questionnaire. This means that we will not be able to withdraw
                personal data from the analyses as soon as participant have submitted their answers.</p>
            <p class="mt-2"><b>Risks/Discomforts</b></p>
            <p>This research study involves minimal risk. The main risk is the small possibility of a data breach, which
                we minimize by not collecting any personal identifying information and storing data securely on
                password-protected computers. Study results will be published in an academic paper or thesis, and
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