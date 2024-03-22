import MyInput from './MyInput.vue';
import MyButton from './MyButton.vue';

const componentData = [
  MyInput,
  MyButton
]

export default {
  install: (app, options) => {
    if(options.components) {
      componentData.map((comp) => {
        if(options.components.indexOf(comp.name) !== -1) {
          app.component(comp.name, comp);
        }
      });      
    } else {
      componentData.map((comp) => {
        app.component(comp.name, comp);
      }); 
    }
  }
}