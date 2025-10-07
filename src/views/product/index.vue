<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <el-card>
    <el-table :data="tableData" style="width: 100%" max-height="250">
      <el-table-column fixed prop="date" label="日期" width="150" />
      <el-table-column prop="name" label="产品" width="120" />
      <el-table-column prop="state" label="状态" width="120" />
      <el-table-column prop="city" label="城市" width="120" />
      <el-table-column prop="address" label="地址" width="600" />
      <el-table-column prop="id" label="id" width="120" />
      <el-table-column fixed="right" label="选项" min-width="120">
        <template #default="scope">
          <el-button link type="danger" size="small" @click.prevent="deleteRow(scope.$index)">
            删除
          </el-button>
          <el-button link type="primary" size="small" @click.prevent="deleteRow(scope.$index)">
            修改
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button class="mt-4" style="width: 100%" @click="onAddItem"> 增加商品</el-button>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import dayjs from 'dayjs'

const now = new Date()

const tableData = ref([
  {
    date: '2016-05-01',
    name: '小米手机',
    state: '有货',
    city: '北京',
    address: '海淀区中关村大街1号',
    id: 'CA 90036',
  },
  {
    date: '2016-05-03',
    name: '华为笔记本',
    state: '有货',
    city: '上海',
    address: '浦东新区张江高科技园区',
    id: 'CA 90037',
  },
  {
    date: '2016-05-05',
    name: '苹果平板',
    state: '有货',
    city: '广州',
    address: '天河区珠江新城花城大道',
    id: 'CA 90038',
  },
  {
    date: '2016-05-07',
    name: '联想电脑',
    state: '有货',
    city: '深圳',
    address: '南山区科技园南区',
    id: 'CA 90039',
  },
  {
    date: '2016-05-09',
    name: '戴尔显示器',
    state: '有货',
    city: '杭州',
    address: '西湖区文三路电子信息街区',
    id: 'CA 90040',
  },
  {
    date: '2016-05-11',
    name: '三星电视',
    state: '有货',
    city: '成都',
    address: '武侯区人民南路四段',
    id: 'CA 90041',
  },
  {
    date: '2016-05-13',
    name: '索尼相机',
    state: '有货',
    city: '武汉',
    address: '洪山区光谷广场',
    id: 'CA 90042',
  },
  {
    date: '2016-05-15',
    name: '佳能打印机',
    state: '有货',
    city: '西安',
    address: '雁塔区高新技术产业开发区',
    id: 'CA 90043',
  },
  {
    date: '2016-05-17',
    name: '飞利浦剃须刀',
    state: '有货',
    city: '南京',
    address: '鼓楼区中山北路',
    id: 'CA 90044',
  },
  {
    date: '2016-05-19',
    name: '美的空调',
    state: '有货',
    city: '重庆',
    address: '渝中区解放碑商圈',
    id: 'CA 90045',
  },
])

const deleteRow = (index: number) => {
  tableData.value.splice(index, 1)
}

const onAddItem = () => {
  now.setDate(now.getDate() + 2)
  tableData.value.push({
    date: dayjs(now).format('YYYY-MM-DD'),
    name: '小米',
    state: '有货',
    city: '眉山',
    address: '大石桥街道',
    id: 'CA 90036',
  })
}
</script>
