# pioneer-bank
live link : https://razibul-alam.github.io/pioneer-bank/
 <div class="row">
    <div class="col-md-4">
      <div class="deposite">
        <h5>Deposite</h5>
        <h2>$<span id="depositebalance">00</span></h2>
      </div>
    </div>

    <div class="col-md-4">
      <div class="deposite">
        <h5>Withdraw</h5>
        <h2>$ <span id="withdrawbalance">00</span></h2>
      </div>
    </div>

    <div class="col-md-4">
      <div class="deposite">
        <h5>Balance</h5>
        <h2>$ <span id="totalbal">00</span></h2>
      </div>
    </div>
  </div>


  <div class="row">
    <div class="col-lg-6">
      <h5>Depoiste</h5>
      <input type="number" name="" id="depositeInput"><br>
      <button id="depbtn" onclick="setAllValue('deposite')">Deposite</button>
    </div>

    <div class="col-lg-6">
      <h5>Withdraw</h5>
      <input type="number" name="" id="withdrawInput"><br>
      <button id="widtbtn" onclick="setAllValue('withdraw')">withdraw</button>
    </div>
  </div>