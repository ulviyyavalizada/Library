<!-- Modal -->
<div class="modal fade bankModal" id="bankModal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
        <div class="modal_header">
            <div class="close_btn">
                <button type="button" class="close_modal" data-bs-dismiss="modal" aria-label="Close">
                    <img src="img/closeModal.svg" alt="">
                </button>
            </div>
            
            <h5 class="modal_title">Bank rekviziti ilə ödəniş</h5>
        </div>

        <div class="modal_body">
            <form action="" id="pay_modal">
                <div class="invoice_box">
                    <div class="invoice_group">
                        <input type="number" placeholder="İnvoice əlavə et">
                        <label>
                            <button id="invoice_camera_btn">
                                <img src="img/camera.svg" alt="">
                            </button>
                        </label>
                    </div>

                    <div class="pay_btn">
                        <button type="button" data-dismiss="modal" aria-label="Close">Əlavə et</button>
                    </div>
                </div>
                
            </form>
        </div>
    </div>
  </div>
</div>