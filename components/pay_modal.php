<!-- Modal -->
<div class="modal fade payModal" id="payModal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
        <div class="modal_header">
            <div class="close_btn">
                <button type="button" class="close_modal" data-bs-dismiss="modal" aria-label="Close">
                    <img src="img/closeModal.svg" alt="">
                </button>
            </div>
            
            <h5 class="modal_title">Balansınızı artırın</h5>
        </div>

        <div class="modal_body">
            <form action="" id="pay_modal">
                <div class="part_1">
                    <p>
                        <span>1.</span> 
                        Artırılacaq məbləği seçin və ya daxil edin:
                    </p>
                    <div class="payment_price">
                        <div class="price_item active">
                            <span>10</span>
                            <label for=""> azn</label>
                        </div>
                        <div class="price_item">
                            <span>15</span>
                            <label for=""> azn</label>
                        </div>
                        <div class="price_item">
                            <span>25</span>
                            <label for=""> azn</label>
                        </div>
                        <div class="price_item custom_price">
                            <input type="number" placeholder="Daxil edin">
                        </div>
                    </div>
                </div>
                
                <div class="part_2">
                    <p>
                        <span>2.</span> 
                        Ödəniş üsulunu seçin
                    </p>
                    <div class="label_box radio_fraction">
                        <div class="label_single">
                            <input type="radio" checked="checked" name="reportOption" id="paymentOption1">
                            <label for="paymentOption1" class="label_project">Bank kartı</label>
                        </div>
                        <div class="label_single">
                            <input type="radio" name="reportOption" id="paymentOption2">
                            <label for="paymentOption2" class="label_project">Terminalla</label>
                        </div>
                        <div class="label_single">
                            <input type="radio" name="reportOption" id="paymentOption3">
                            <label for="paymentOption3" class="label_project">Bank rekviziti ilə</label>
                        </div>
                    </div>
                </div>

                <div class="pay_btn">
                    <button type="button">ÖDƏ</button>
                </div>
            </form>

            
        </div>

    </div>
  </div>
</div>