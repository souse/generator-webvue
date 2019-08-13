import Vue from 'vue';
import {
  Row,
  Col,
  Button,
  Loading,
  MessageBox,
  Message,
  Notification,
  Container,
  Main,
  Header,
  Footer,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Select,
  Option,
  OptionGroup,
  Input,
  InputNumber,
  Dialog,
  Autocomplete,
  Upload
} from 'element-ui';
import '@/assets/css/element-variables.scss';

Vue.use(Container);
Vue.use(Main);
Vue.use(Header);
Vue.use(Footer);
Vue.use(Row);
Vue.use(Col);
Vue.use(Button);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Dialog);
Vue.use(Autocomplete);
Vue.use(Upload);

Vue.use(Loading.directive);

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
// 部分提示 注册到全局 方便使用
window.$message = Vue.prototype.$message = Message;
