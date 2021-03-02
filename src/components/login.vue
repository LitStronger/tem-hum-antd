<template>
  <div class="main">
    <a-form
      id="formLogin"
      class="user-layout-login"
      ref="formLogin"
      :form="form"
      style="width: 350px; margin: 10vh auto"
    >
      <a-tabs :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' }">
        <a-tab-pane tab="请 登 录 " key="tab1">
          <a-alert
            v-if="isLoginError"
            type="error"
            showIcon
            style="margin-bottom: 24px"
            message="账户或密码错误（admin/ant.design )"
          />
          <a-form-item>
            <a-input
              style="margin-top: 6vh"
              size="large"
              type="text"
              placeholder="请输入用户名"
              v-decorator="[
                'username',
                {
                  rules: [{ required: true, message: '请输入用户名' }],
                  validateTrigger: 'blur',
                },
              ]"
            >
              <a-icon
                slot="prefix"
                type="user"
                :style="{ color: 'rgba(0,0,0,.25)' }"
              />
            </a-input>
          </a-form-item>

          <a-form-item>
            <a-input-password
              size="large"
              placeholder="请输入密码"
              v-decorator="[
                'password',
                {
                  rules: [{ required: true, message: '请输入密码' }],
                  validateTrigger: 'blur',
                },
              ]"
            >
              <a-icon
                slot="prefix"
                type="lock"
                :style="{ color: 'rgba(0,0,0,.25)' }"
              />
            </a-input-password>
          </a-form-item>
        </a-tab-pane>
      </a-tabs>

      <a-form-item>
        <a-checkbox v-decorator="['rememberMe', { valuePropName: 'checked' }]"
          >自动登录</a-checkbox
        >
        <router-link
          :to="{ name: 'recover', params: { user: 'aaa' } }"
          class="forge-password"
          style="float: right"
          >忘记密码</router-link
        >
      </a-form-item>

      <a-form-item style="margin-top: 24px">
        <a-button
          size="large"
          type="primary"
          htmlType="submit"
          class="login-button"
          @click="onJump"
          >确定</a-button
        >
      </a-form-item>

      <div class="user-login-other">
        <span>其他登录方式</span>
        <a>
          <a-icon class="item-icon" type="alipay-circle"></a-icon>
        </a>
        <a>
          <a-icon class="item-icon" type="taobao-circle"></a-icon>
        </a>
        <a>
          <a-icon class="item-icon" type="weibo-circle"></a-icon>
        </a>
        <!-- <router-link class="register" :to="{ name: 'register' }">注册账户</router-link> -->
      </div>
    </a-form>
  </div>
</template>

<script src="/js/jquery.js"></script>

<script>
import Vue from "vue";

export default {
  components: {},
  data() {
    return {
      customActiveKey: "tab1",
      loginBtn: false,
      loginType: 0,
      isLoginError: false,
      requiredTwoStepCaptcha: false,
      stepCaptchaVisible: false,
      form: this.$form.createForm(this),
      state: {
        time: 60,
        loginBtn: false,
        loginType: 0,
        smsSendBtn: false,
      },
    };
  },
  methods: {
    onJump() {
      let token = "";
      let router = this.$router;
      let username = this.form.getFieldsValue(["username"]).username;
      $.ajax({
        type: "POST",
        url: "http://api.huozhiniao.cn/api/user/v2/login",
        data: {
          mobile: this.form.getFieldsValue(["username"]).username,
          password: this.form.getFieldsValue(["password"]).password,
          // mobile: 'test',
          // password: '123456'
        },
        success: function (res) {
          if (res.success == false) alert("用户名或密码错误");
          else {
            let idList = [];
            token = res.data.token;
            idList = res.data.deviceIds;

            let userMsg = res.data;
            userMsg.username = username;
            Vue.prototype.$userMsg = userMsg;

            let userInfo = {
              token: token,
              id: idList[0],
            };
            router.push({ path: "/platform", query: userInfo });
          }
        },
        error: function () {
          alert("登陆失败，请检查网络");
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.user-layout-login {
  label {
    font-size: 14px;
  }

  .getCaptcha {
    display: block;
    width: 100%;
    height: 40px;
  }

  .forge-password {
    font-size: 14px;
  }

  button.login-button {
    padding: 0 15px;
    font-size: 16px;
    height: 40px;
    width: 100%;
  }

  .user-login-other {
    text-align: left;
    margin-top: 24px;
    line-height: 22px;

    .item-icon {
      font-size: 24px;
      color: rgba(0, 0, 0, 0.2);
      margin-left: 16px;
      vertical-align: middle;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #1890ff;
      }
    }

    .register {
      float: right;
    }
  }
}
</style>