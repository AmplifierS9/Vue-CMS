<template>
  <div>
    <v-client-table :columns="columns" :data="data" :options="options">
      <a slot="uri" slot-scope="props" target="_blank" :href="props.row.uri" class="fa fa-eye"></a>

      <div slot="child_row" slot-scope="props">
        The link to {{props.row.name}} is <a :href="props.row.uri">{{props.row.uri}}</a>
      </div>

    </v-client-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: ['id', 'name', 'code', 'uri'],
      data: [
        {
          code: 'ZW',
          name: 'Zimbabwe',
          created_at: '2015-04-24T01:46:50.459583',
          updated_at: '2015-04-24T01:46:50.459593',
          uri: 'http://api.lobbyfacts.eu/api/1/country/245',
          id: 245
        },
        {
          code: 'ZM',
          name: 'Zambia',
          created_at: '2015-04-24T01:46:50.457459',
          updated_at: '2015-04-24T01:46:50.457468',
          uri: 'http://api.lobbyfacts.eu/api/1/country/244',
          id: 244
        },
        {
          code: 'YE',
          name: 'Yemen',
          created_at: '2015-04-24T01:46:50.454731',
          updated_at: '2015-04-24T01:46:50.454741',
          uri: 'http://api.lobbyfacts.eu/api/1/country/243',
          id: 243
        }
      ],
      options: {
        perPage: 10,
        headings: {
          id: 'ID',
          name: 'Country Name',
          code: 'Country Code',
          uri: 'View Record'
        },
        sortable: ['name', 'code'],
        filterable: ['name', 'code']
      }
    }
  }
}
</script>

<style scoped>
.VuePagination {
  text-align: center;
}

.vue-title {
  text-align: center;
  margin-bottom: 10px;
}

.vue-pagination-ad {
  text-align: center;
}

.glyphicon.glyphicon-eye-open {
  width: 16px;
  display: block;
  margin: 0 auto;
}

th:nth-child(3) {
  text-align: center;
}

.VueTables__child-row-toggler {
  width: 16px;
  height: 16px;
  line-height: 16px;
  display: block;
  margin: auto;
  text-align: center;
}

.VueTables__child-row-toggler--closed::before {
  content: "+";
}

.VueTables__child-row-toggler--open::before {
  content: "-";
}
</style>
