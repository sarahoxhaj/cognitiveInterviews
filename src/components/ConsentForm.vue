<template>

    <div class="bg-gray-50 dark:bg-slate-600 flex flex-col min-h-screen">
        <p class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white mt-7 text-center">Consent form</p>
        <div class="text-left px-24 dark:text-white">
            <p><b>Introduction</b></p>
            <p>You are invited to participate in a study titled "A Validated Scale for Visual Complexity in
                Visualization". The
                purpose of this research study is to develop a validated scale for measuring the visual complexity of
                data visualization. This study is conducted by:</p>
            <p>• Sara Hoxhaj (University of Vienna)<br></p>
            <p>• Torsten Möller (University of Vienna)<br></p>
            <p>• Laura Koesten (University of Vienna)<br></p>
            <p>• Petra Isenberg (University of Paris-Saclay)<br></p>
            <p>• Tobias Isenberg (University of Paris-Saclay)<br></p>
            <p>• Anne-Flore Cabouat (University of Paris-Saclay)<br></p> <br>
            <p><b>Who can participate?</b></p>
            <p>Anyone ...</p>
            <p>• who is a fluent speaker of English</p>
            <p>• is of legal age (18 years in most countries), and</p>
            <p>• considers himself/herself an expert on the topic of visualization</p><br>
            <p><b>What is involved in the study?</b></p>
            <p>Completing this survey takes approximately 10 minutes. Participants will answer questions related to
                evaluating the visual complexity of data visualizations. Participation
                requires completing a background questionnaire that follows this consent form.</p><br>
            <p><b>Voluntariness of participation</b></p>
            <p>Participation is voluntary. Participants can stop the study at any time without giving a reason and their
                data will not be included in our analysis. Withdrawal of participation in the research project will be
                without consequences of any kind.</p><br>
            <p><b>Anonymity and Confidentiality</b></p>
            <p>This study is anonymous - we do not require participants to provide any information that could identify
                them in the consent form nor in the questionnaire. This means that we will not be able to withdraw
                personal data
                from the analyses as soon as participant have submitted their answers.</p><br>
            <p><b>Risks/Discomforts</b></p>
            <p>We believe there are no known risks associated with this research study; however, as with any online
                related activity, the risk of a breach is always possible. We will minimize any risk by requiring no
                personally identifiable information such as names, addresses, phone numbers, or email addresses and
                storing the raw data on password-protected computers. This study will be published in an academic paper
                or a thesis.
                The anonymized responses will then be made publicly available.</p><br>
            <p><b>Compensation</b></p>
            <p>Participants will receive no compensation for their participation.</p><br>
            <p><b>Contact details</b></p>
            <p>Please feel free to contact one of the six researchers below if you wish to know more about the study,
                or if you have any questions:</p><br>
            <div class="flex justify-between w-full">
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
                this.$router.push('/BackgroundView');
                this.$nextTick(() => window.scrollTo(0, 0));
            } else {
                alert('You cannot proceed if you do not click "Yes".');
            }
        }
    }
}
</script>