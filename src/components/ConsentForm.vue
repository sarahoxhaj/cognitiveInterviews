<template>

    <div class="bg-gray-50 dark:bg-slate-600 flex flex-col min-h-screen items-center justify-center">
        <p class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white mt-7 text-center">Before You Take Part...
        </p>
        <div class="text-left px-24 dark:text-white">
            <p class="mt-5"><b>In this survey you will</b> be asked to rate 16 statements from <i>strongly disagree</i>
                to <i>strongly agree</i> and say out loud what you are thinking as you rating each statement. <br>Before
                starting, you will complete a short task only to get familiar with this method. The full session
                (excluding the training task) will be audio and screen-recorded. <br>This is done only for data
                collection
                and quality-review purposes.
            </p>

            <p class="mt-5">Taking part is <b>voluntary</b>, and you can stop aty any time without giving a reason. If
                you choose to stop, your data will not be included in the analysis and there will be no consequences.
            </p>

            <p class="mt-5">We <b>do not collect</b> any information that can <b>identify</b> you, such as your name or
                email address. However, because the conversation is recorded, your voice may be recognizable to the
                research team. Only the research team will have access to the recordings, and they will be deleted after
                the analysis is complete. <br>Any results shared publicly will be anonymized and will not include the
                recordings.</p>
            <div class="mt-6 bg-sky-900 rounded-lg py-2">
                <p class="px-2">
                    <span class="text-red-500 text-2xl">* </span>
                    <span class="text-white">Please confirm that you wish to participate in this study.</span>
                </p>
                <p class="text-white px-2">By clicking the <b>Yes</b> button below, you confirm that you have read and
                    understood the information above, that you meet the requirements for taking part, and that your
                    questions have been answered. You understand that taking part is voluntary and that you can stop at
                    any time without giving a reason or facing any consequences.</p>
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
                // generate user ID
                const userID = Math.floor(10000 + Math.random() * 90000).toString();
                sessionStorage.setItem("userID", userID);

                this.$router.replace({ name: 'TrainingTask' });
                this.$nextTick(() => window.scrollTo(0, 0));
            } else {
                alert('You cannot proceed if you do not click "Yes".');
            }
        }
    }
}
</script>