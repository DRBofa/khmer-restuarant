<template>

  <q-layout view="lHh Lpr lFf" class="bg-white" >
    <!-- -----------------start alert form,.......................-------------- -->

     <div class="q-pa-md q-gutter-sm">
   <!-- <q-btn label="Maximized" color="primary" @click="dialog = true" /> -->

    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
     
    >
      <q-card >
        <q-bar class="bg-orange text-white">
          <q-space />
           <!--
          <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
            <q-tooltip v-if="maximizedToggle" content-class="bg-white text-primary">Minimize</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
            <q-tooltip v-if="!maximizedToggle" content-class="bg-white text-primary">Maximize</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="close" v-close-popup>
           <q-tooltip content-class="bg-white text-primary">Close</q-tooltip> 
          </q-btn> -->
        </q-bar>

        <q-card-section>
          <center>
          <!-- title-->

          
          </center>
        </q-card-section>

        <q-card-section class="q-pt-none">
         
            <!--..........useracount.................................. -->
            <center>
           <div class="q-pa-md" style="max-width: 400px">
                 <q-card class="my-card">
                   <q-card-section>
                     <div class="text-h6">គណីយប្រើប្រាស់</div>
      
                   </q-card-section>

                   <q-separator />

                      <q-card-actions vertical>
                      <q-input outlined v-model="text" label="ឈ្មេាះអ្នកប្រើប្រាស់" > 
                        <template v-slot:prepend>
                              <q-icon name="man" />
                         </template>
                      </q-input>
                      </q-card-actions>
                      <br>
                     <q-card-actions vertical>
                      <q-input outlined v-model="text" label="លេខសំងាត់" />
                      
                  </q-card-actions>
                   <br>
                   <q-separator />
                 <center>
                ​  <q-card-actions >
                  
                   <q-btn color="secondary"  label="ចូលប្រាស់" v-close-popup @click="seen=true"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <q-btn color="red"  label="ចាក់ចេញ" />
                    <br>
                    <br>
                    <br>
                  </q-card-actions>
                 </center>
    </q-card>
           </div>
           
            </center>
            <!-- end ..........--->


        </q-card-section>
      </q-card>
    </q-dialog>
  </div>

  <!-- ..........................end pop up---------- -->
  <div v-if="seen">
    <q-header elevated >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
        ​ភោជនីយដ្ឋាន
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>ប្រអប់គ្រប់គ្រង</q-item-label>
          <router-link to="/table" tag="li" >
        <q-item clickable tag="a" target="_blank" rel="noopener" >
          <q-item-section avatar>
            <q-icon name="home" />   

          </q-item-section>
          <q-item-section>
            <q-item-label>បង្កើតតុ</q-item-label>
            <q-item-label caption>Create Table</q-item-label>
            
          </q-item-section>
           
        </q-item>
         </router-link>
         <!-- <router-link to="/food" tag="li" >
        <q-item clickable tag="a" target="_blank" rel="noopener" >
          <q-item-section avatar>
            <q-icon name="add" />
            </q-item-section>
          <q-item-section>
            <q-item-label>បង្កើតមុខម្ហួប</q-item-label>
            <q-item-label caption>Create Food</q-item-label>
          </q-item-section>
        </q-item>
         </router-link> -->
        <q-item clickable tag="a" target="_blank" rel="noopener" >
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>បង្កើតគណនីយប្រើប្រាស់</q-item-label>
            <q-item-label caption>https://chat.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" rel="noopener" href="https://forum.quasar.dev">
          <q-item-section avatar>
            <q-icon name="record_voice_over" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Forum</q-item-label>
            <q-item-label caption>https://forum.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        
        <q-item clickable tag="a" target="_blank" rel="noopener" href="https://twitter.quasar.dev">
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Twitter</q-item-label>
            <q-item-label caption>@quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" rel="noopener" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Facebook</q-item-label>
            <q-item-label caption>@QuasarFramework</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
  
      <router-view />
    </q-page-container>
  </div>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: false,
        dialog: true,
      maximizedToggle: true,
      seen:false
    }
  }
}
</script>
<style>
/* router-link{
    text-decoration: none;
} */
</style>