<template>
    <div class="bg-gray-50 dark:bg-slate-600 flex flex-col items-center justify-center min-h-screen">
        <div class="flex flex-row gap-x-16 mt-4 max-w-5xl">
            <ol class="list-decimal text-left dark:text-white">
                <li v-for="(item, index) in leftItems" :key="'l' + index" class="mt-4 first:mt-0">
                    {{ item }}
                </li>
            </ol>

            <ol :start="rightStartNumber" class="list-decimal text-left dark:text-white">
                <li v-for="(item, index) in rightItems" :key="'r' + index" class="mt-4 first:mt-0">
                    {{ item }}
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OtherItems',
    data() {
        return {
            allItems: [
                'I find the visual encoding is poor and violates good practice.',
                'I find the visualization has overlapping information.',
                'I find the visualization provides not enough context.',
                'I find the variables in the visualization visible.',
                'I find this visualization attractive.',
                'I find that the structure is unclear.',
                'I find this visualization visually pleasing.',
                'I find all data points are visible in the visualization.',
                'I find the visualization occludes information.',
                'I find the colour coding overly complex.',
                'I find the visualization dense.',
                'I find the visualization uses too many colours.',
                'I find the visualization displays several dimensions at once.',
                'I feel the main idea is not clear within the first few seconds.',
                'I find there is too much information in this visualization.',
                'I find the visualization requires effort to understand.',
                'I find this visualization difficult to read.',
                'I find the visualization overloaded.',
                'I find the large number of data items makes the visualization too complex.',
                'I find this visualization takes time to understand.',
                'I find the visualization has a complex visual appearance.',
                'I find the visualization cluttered.',
                'I find the visualization has unnecessary complexity.',
            ],
        }
    },
    computed: {
        halfSize() {
            return Math.ceil(this.allItems.length / 2)
        },
        leftItems() {
            return this.allItems.slice(0, this.halfSize)
        },
        rightItems() {
            return this.allItems.slice(this.halfSize)
        },
        rightStartNumber() {
            return this.leftItems.length + 1
        }
    }
}
</script>