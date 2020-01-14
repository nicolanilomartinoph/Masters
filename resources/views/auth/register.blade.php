@extends('layouts.app')

@section('content')
<div class="container bg-dark">
    <div class="row">
        <img class="mx-auto" src="/img/navbar/masterLogo.png" id="registerMasterLogo">
    </div>
    <div class="col-8 mx-auto">
    <div class="row">
        <div class="col-12 text-center font-weight-bold" id="create_an_account">
            Create an account
        </div>
    </div>
    <div class="row justify-content-around mt-3">
        <a href="#" class="col-5 fa fa-facebook-official text-center">
            <span id="facebook-text"> Facebook</span>
        </a>
        <a href="#" class="col-5 text-center my-auto" id="google-icon-cont">
            <img src="/img/google-icon.png" id="google-icon" /> 
            Google
        </a>
    </div>
    <div class="row justify-content-center mt-2 font-weight-bold">OR</div>
    <div class="row">
        <div class="col-12 ">
            <p class="text-center text-light font-weight-bold mt-2">Start your adventure in Masters, echo out and be the best in your music.</p>
        </div>
    </div>
    <div class="row">
            <form class="col-12 mb-5" method="POST" action="{{ route('register') }}">
                @csrf

                <div class="col-md-12 my-2">
                    <input id="firstname" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('firstname') }}" required autocomplete="name"  placeholder="Firstname" autofocus>
                    @error('name')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="col-md-12 my-2">
                    <input id="middlename" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('middlename') }}" required autocomplete="name"  placeholder="Middlename" autofocus>
                    @error('name')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="col-md-12 my-2">
                    <input id="lastname" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('lastname') }}" required autocomplete="name"  placeholder="Lastname" autofocus>
                    @error('name')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="col-12 my-2">
                    <div class="row justify-content-between">
                        <div class=" w-auto mx-3">
                            <input id="month" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('month') }}" required autocomplete="name"  placeholder="MM"autofocus>
                            @error('name')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                        <div class="w-auto">
                            <input id="day" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('day') }}" required autocomplete="name"  placeholder="DD"autofocus>
                            @error('name')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                        <div class=" w-auto mx-3">
                            <input id="year" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('year') }}" required autocomplete="name"  placeholder="YYYY"autofocus>
                            @error('name')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>
                </div>
                
                <div class="col-md-12 my-2">
                    <input id="email" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('email') }}" required autocomplete="name"  placeholder="example@example.com"autofocus>
                    @error('name')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="col-md-12 my-2">
                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password" placeholder="Password">
                    @error('password')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="col-md-12 my-2">
                    <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password" placeholder="Password">
                    @error('password')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="col-md-12 my-2">
                    <input id="secret_question" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('secret_question') }}" required autocomplete="name"  placeholder="Secret Question" autofocus>
                    @error('name')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="col-md-12 my-2">
                    <input id="secret_answer" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('answer') }}" required autocomplete="name"  placeholder="Secret Answer" autofocus>
                    @error('name')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="registerCheckbox">
                    <input type="checkbox" class="form-check-input">
                    Receive news and special offers from Masters by email.
                </div>
                <div>
                    <p class="registerCheckbox">Carefully selected news, event information and special offer about Masters product and services.</p>
                </div>
                <div class="row m-3">
                    <button class="col-12 justify-content-center my-2" id="create_a_free_account" type="submit">Create a free account</button>
                </div>
                <div class="row m-3">
                    <button class="col-12 justify-content-center my-2" id="already_have_an_account">Already have an account?</button>
                </div>
                <div class="row justify-content-center">
                    <p class="text-light">By clicking on "Create a free account", I agree to the Masters End User Licence Agreement and Privacy Policy.</p>
                </div>
            </form>        
    </div>
    </div>
        <div class="row text-center my-5">
            <div class="col-12">
                <h4><pre class="text-light">CAREERS  <span class="footerSeparator">|</span>  ABOUT  <span class="footerSeparator">|</span>  SUPPORT  <span class="footerSeparator">|</span>  CONTACT US  <span class="footerSeparator">|</span>  PRESS  <span class="footerSeparator">|</span>  API</pre></h4>
            </div>
        </div>
        <div class="row text-center">
            <div class="col-12 text-muted mt-2">©2020 MASTERS , INC. ALL RIGHTS RESERVED.</div>
            <div class="col-12 text-muted mb-2">All <span class="text-light">trademarks</span> reference herein are the properties of their respective owners.</div>
        </div>
        <div class="row">
        <div class="col-12 text-center mb-5">
            <h5>
                <pre class="text-light">PRIVACY    LEGAL   TERMS   COOKIES</pre>
            </h5>
        </div>
    </div>
</div>

<script>
    document.body.style.background = "rgb(1, 16, 34)";
</script>
@endsection
