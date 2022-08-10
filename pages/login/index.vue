<template>
    <div>
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header">
                                        <h3 class="text-center font-weight-light my-4">Login</h3>
                                    </div>
                                    <div class="card-body">
                                        <ValidationObserver v-slot="{ handleSubmit }">
                                            <form @submit.prevent="handleSubmit(executaLogin)">
                                                <div class="form-floating mb-3">
                                                    <ValidationProvider rules="required" v-slot="{ errors }">
                                                        <label for="inputUsername">Usuário</label>
                                                        <input class="form-control" v-model="loginForm.username"
                                                            id="inputUsername" type="text" placeholder=" " />
                                                        <small class="text-danger">{{ errors[0] }}</small>
                                                    </ValidationProvider>
                                                </div>
                                                <div class="form-floating mb-3">
                                                    <ValidationProvider rules="required" v-slot="{ errors }">
                                                        <label for="inputPassword">Senha</label>
                                                        <input class="form-control" v-model="loginForm.password"
                                                            id="inputPassword" type="password" placeholder=" " />
                                                        <small class="text-danger">{{ errors[0] }}</small>
                                                    </ValidationProvider>
                                                </div>

                                                <!-- <div class="form-check mb-3">
                                                <input class="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                                <label class="form-check-label" for="inputRememberPassword">Remember Password</label>
                                            </div> -->
                                                <div
                                                    class="d-flex align-items-center  textjustify-content-between mt-4 mb-0">
                                                    <!-- <a class="small" href="password.html">Forgot Password?</a> -->
                                                    <button type="submit" class="btn btn-primary">Login</button>
                                                </div>
                                            </form>
                                        </ValidationObserver>

                                    </div>
                                    <!-- <div class="card-footer text-center py-3">
                                        <div class="small"><a href="register.html">Need an account? Sign up!</a></div>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <!-- <div id="layoutAuthentication_footer">
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; Your Website 2021</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div> -->
        </div>

    </div>
</template>

<script src="./login-controller">
</script>