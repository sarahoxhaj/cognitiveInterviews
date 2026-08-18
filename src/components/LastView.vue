<template>

    <div class="bg-gray-50 dark:bg-slate-600 flex flex-col min-h-screen pb-8 dark:text-white items-center justify-center">
        <p class="mb-2 mt-20 text-4xl tracking-tight text-gray-900 text-center dark:text-white">
            Thank you for participating!
        </p>
        <p class="mt-6">Please feel free to reach out if you have any questions: <a
                href="mailto:sara.hoxhaj@univie.ac.at"
                class="font-medium text-blue-600 dark:text-amber-300 hover:underline">
                sara.hoxhaj@univie.ac.at
            </a></p>
        <p>You can close this tab now.</p>
    </div>
</template>

<script>
export default {
    name: 'LastView',
    methods: {
        goToLastViewThanks() {
            //this.$router.push('/LastViewThanks');
            this.$router.replace({ name: 'LastViewThanks' });
        }
    }
}
</script>