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
       <p class="mt-3 dark:text-white font-medium">Click the button to have an overview of the answers.<button @click.prevent="goToOverview" type="submit"
                class="ml-2 mr-2 py-2 px-2 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-black dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-400">Overview</button>
        </p>
    </div>
</template>

<script>
export default {
    name: 'LastView',
    methods: {
        goToOverview() {
            //this.$router.push('/LastViewThanks');
            this.$router.replace({ name: 'OverviewView' });
        }
    }
}
</script>