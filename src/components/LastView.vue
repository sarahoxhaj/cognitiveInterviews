<template>

    <div class="bg-gray-50 dark:bg-slate-600 flex flex-col min-h-screen pb-8 dark:text-white">
        <p class="mb-2 mt-20 text-4xl tracking-tight text-gray-900 text-center dark:text-white">
            Thank you!
        </p>
        <p class="mt-6">Thank you for your interest and participating in our survey.</p>
        <p>If you have any questions or general comments, do not hesitate to contact us.</p>
        <p>You can close this tab now.</p>

        <div class="flex flex-col space-y-4 px-24 mt-8 mx-auto justify-center">
            <div class="flex space-x-8 justify-center">
                <div class="flex flex-col items-center">
                    <p><b>Sara Hoxhaj</b></p>
                    <a href="mailto:a12242040@unet.univie.ac.at"
                        class="font-medium text-blue-600 dark:text-amber-300 hover:underline">
                        a12242040@unet.univie.ac.at
                    </a>
                </div>
                <div class="flex flex-col items-center">
                    <p><b>Torsten Möller</b></p>
                    <a href="mailto:torsten.moeller@univie.ac.at"
                        class="font-medium text-blue-600 dark:text-amber-300 hover:underline">
                        torsten.moeller@univie.ac.at
                    </a>
                </div>
                <div class="flex flex-col items-center">
                    <p><b>Laura Koesten</b></p>
                    <a href="mailto:laura.koesten@univie.ac.at"
                        class="font-medium text-blue-600 dark:text-amber-300 hover:underline">
                        laura.koesten@univie.ac.at
                    </a>
                </div>
            </div>
            <div class="flex space-x-8 justify-center ml-12">
                <div class="flex flex-col items-center">
                    <p><b>Petra Isenberg</b></p>
                    <a href="mailto:petra.isenberg@inria.fr"
                        class="font-medium text-blue-600 dark:text-amber-300 hover:underline">
                        petra.isenberg@inria.fr
                    </a>
                </div>
                <div class="flex flex-col items-center">
                    <p><b>Tobias Isenberg</b></p>
                    <a href="mailto:tobias.isenberg@inria.fr"
                        class="font-medium text-blue-600 dark:text-amber-300 hover:underline">
                        tobias.isenberg@inria.fr
                    </a>
                </div>
                <div class="flex flex-col items-center">
                    <p><b>Anne-Flore Cabouat</b></p>
                    <a href="mailto:anne-flore.cabouat@inria.fr"
                        class="font-medium text-blue-600 dark:text-amber-300 hover:underline">
                        anne-flore.cabouat@inria.fr
                    </a>
                </div>
            </div>
        </div>



    </div>
</template>

<script>
export default {
    name: 'LastView',
    methods: {
        goToLastViewThanks() {
            this.$router.push('/LastViewThanks');
        }
    }
}
</script>