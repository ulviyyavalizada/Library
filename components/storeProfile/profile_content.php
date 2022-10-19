<div class="tab_content profile_content show">
    <form action="">
        <div class="form_part1">
            <p class="title">Şəxsi məlumatlar</p>
            
            <div class="form_inputs">
            <div class="form-group">
                <input class="inputValidate" id="name" type="text" name="name" required>
                <label class="place-label" for="name">Adınız <span>*</span></label>
            </div>
            <div class="form-group">
                <input class="inputValidate" type="text" id="surname" name="surname" required>
                <label class="place-label" for="surname">Soyadınız <span>*</span></label>
            </div>
            <div class="form-group">
                <input class="inputValidate" type="email" id="contact_email" name="contact_email" required>
                <label class="place-label" for="contact_email">E-poçt <span>*</span></label>
            </div>
            <div class="form-group">
                <input class="inputValidate number_input" id="contact_phone" type="number" minlength="10" name="phone" required>
                <label class="place-label" for="contact_phone">Telefon nömrəsi <span>*</span></label>
            </div>
            </div>
        </div>
        
        <div class="form_part2">
            <p class="title">Mağaza məlumatları</p>
            
            <div class="form_inputs">
            <div class="part_1">
                <div class="form-group">
                <input class="inputValidate number_input" id="store_name" type="number" minlength="10" name="phone" required>
                <label class="place-label" for="store_name">Mağaza adı <span>*</span></label>
                </div>
                <div class="form-group textarea_group">
                <textarea class="inputValidate" id="store_info" name="" required></textarea>
                <label class="place-label" for="store_info">Mağaza haqqında <span>*</span></label>
                </div>
            </div>
            <div class="part_2">
                <div class="form-group whatsapp_visibility">
                    <input class="inputValidate number_input" id="store_phone" type="number" minlength="10" name="">
                    <label class="place-label" for="store_phone">Telefon nömrəsi</label>

                    <div class="whatsapp_group label_box radio_fraction">
                        <div class="label_single">
                            <input type="checkbox" checked="checked" name="whatsappVisibility" id="whatsappVisibility">
                            <label for="whatsappVisibility" class="label_project">Whatsapp aktivdir</label>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                <input class="inputValidate" type="email" id="store_email" name="">
                <label class="place-label" for="store_email">E-poçt </label>
                </div>
                <div class="form-group">
                <input class="inputValidate" type="email" id="store_site" name="">
                <label class="place-label" for="store_site">Web saytınız </label>
                </div>
                <div class="form-group">
                <input class="inputValidate" type="email" id="store_address" name="" >
                <label class="place-label" for="store_address">Ünvan </label>
                </div>
                <div class="working_time_label">
                    <label class="place-label" for="store_working_time">
                        <span class="_text">İş saatları</span>
                        <img src="img/dropIcon.svg" alt="">
                    </label>
                
                    <div class="dropdown_contain">
                        <div class="dropdown_box">
                            <div class="time_item active">
                                <span class="_text">
                                    Bazar ertəsi
                                </span>
                                <div class="time_box">
                                    <div class="_time">
                                        <input type="time" id="timeItem_1">
                                        <label for="timeItem_1">09:00</label>
                                    </div>
                                    <span class="_middle"></span>
                                    <div class="_time">
                                        <input type="time" id="timeItem_2">
                                        <label for="timeItem_2">09:00</label>
                                    </div>
                                </div>
                            </div>
                            <div class="time_item">
                                <span class="_text">
                                    Bazar ertəsi
                                </span>
                                <div class="time_box">
                                    <div class="_time">
                                        <input type="time" id="timeItem_3">
                                        <label for="timeItem_3">09:00</label>
                                    </div>
                                    <span class="_middle"></span>
                                    <div class="_time">
                                        <input type="time" id="timeItem_4">
                                        <label for="timeItem_4">09:00</label>
                                    </div>
                                </div>
                            </div>
                            <div class="time_item">
                                <span class="_text">
                                    Bazar ertəsi
                                </span>
                                <div class="time_box">
                                    <div class="_time">
                                        <input type="time" id="timeItem_5">
                                        <label for="timeItem_5">09:00</label>
                                    </div>
                                    <span class="_middle"></span>
                                    <div class="_time">
                                        <input type="time" id="timeItem_6">
                                        <label for="timeItem_6">09:00</label>
                                    </div>
                                </div>
                            </div>
                            <div class="time_item">
                                <span class="_text">
                                    Bazar ertəsi
                                </span>
                                <div class="time_box">
                                    <div class="_time">
                                        <input type="time" id="timeItem_7">
                                        <label for="timeItem_7">09:00</label>
                                    </div>
                                    <span class="_middle"></span>
                                    <div class="_time">
                                        <input type="time" id="timeItem_8">
                                        <label for="timeItem_8">09:00</label>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
            
            </div>

            <div class="new_branch">
                <div class="new_branch_box">
                    <p class="branch_title">Yeni filial</p>
                    <div class="form_inputs">
                        <div class="part_1">
                            <div class="form-group">
                                <input class="inputValidate" type="email" id="store_address" name="" >
                                <label class="place-label" for="store_address">Ünvan </label>
                            </div>
                            <div class="form-group">
                                <input class="inputValidate" type="email" id="store_email" name="">
                                <label class="place-label" for="store_email">E-poçt </label>
                            </div>
                            <div class="form-group">
                                <input class="inputValidate" type="email" id="store_site" name="">
                                <label class="place-label" for="store_site">Web saytınız </label>
                            </div>
                        </div>
                        <div class="part_2">
                            <div class="form-group whatsapp_visibility">
                                <input class="inputValidate number_input" id="store_phone" type="number" minlength="10" name="">
                                <label class="place-label" for="store_phone">Telefon nömrəsi</label>

                                <div class="whatsapp_group label_box radio_fraction">
                                    <div class="label_single">
                                        <input type="checkbox" checked="checked" name="whatsappVisibilityNewBranch" id="whatsappVisibilityNewBranch">
                                        <label for="whatsappVisibilityNewBranch" class="label_project">Whatsapp aktivdir</label>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="working_time_label">
                                <label class="place-label" for="store_working_time">
                                    <span class="_text">İş saatları</span>
                                    <img src="img/dropIcon.svg" alt="">
                                </label>
                            
                            <div class="dropdown_contain">
                                <div class="dropdown_box">
                                    <div class="time_item active">
                                        <span class="_text">
                                            Bazar ertəsi
                                        </span>
                                        <div class="time_box">
                                            <div class="_time">
                                                <input type="number" max="2" placeholder="00">
                                                <span>:</span>
                                                <input type="number" max="2" placeholder="00">
                                            </div>
                                            <span class="_middle">-</span>
                                            <div class="_time">
                                                <input type="number" max="2" placeholder="00">
                                                <span>:</span>
                                                <input type="number" max="2" placeholder="00">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="time_item">
                                        <span class="_text">
                                            Bazar ertəsi
                                        </span>
                                        <div class="time_box">
                                            <div class="_time">
                                                <input type="number" max="2" placeholder="00">
                                                <span>:</span>
                                                <input type="number" max="2" placeholder="00">
                                            </div>
                                            <span class="_middle">-</span>
                                            <div class="_time">
                                                <input type="number" max="2" placeholder="00">
                                                <span>:</span>
                                                <input type="number" max="2" placeholder="00">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="time_item">
                                        <span class="_text">
                                            Bazar ertəsi
                                        </span>
                                        <div class="time_box">
                                            <div class="_time">
                                                <input type="number" max="2" placeholder="00">
                                                <span>:</span>
                                                <input type="number" max="2" placeholder="00">
                                            </div>
                                            <span class="_middle">-</span>
                                            <div class="_time">
                                                <input type="number" max="2" placeholder="00">
                                                <span>:</span>
                                                <input type="number" max="2" placeholder="00">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="time_item">
                                        <span class="_text">
                                            Bazar ertəsi
                                        </span>
                                        <div class="time_box">
                                            <div class="_time">
                                                <input type="number" max="2" placeholder="00">
                                                <span>:</span>
                                                <input type="number" max="2" placeholder="00">
                                            </div>
                                            <span class="_middle">-</span>
                                            <div class="_time">
                                                <input type="number" max="2" placeholder="00">
                                                <span>:</span>
                                                <input type="number" max="2" placeholder="00">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="time_item">
                                        <span class="_text">
                                            Bazar ertəsi
                                        </span>
                                        <div class="time_box">
                                            <div class="_time">
                                                <input type="number" max="2" placeholder="00">
                                                <span>:</span>
                                                <input type="number" max="2" placeholder="00">
                                            </div>
                                            <span>-</span>
                                            <div class="_time">
                                                <input type="number" max="2" placeholder="00">
                                                <span>:</span>
                                                <input type="number" max="2" placeholder="00">
                                            </div>
                                        </div>
                                        
                                    </div>

                                </div>
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            
            </div>

            <button class="add_branch_form">
            <span>Filial əlavə et</span>
            <img src="img/addStore.svg" alt="">
            </button>

            <div class="store_file_boxes">
            <div>
                <div class="first_box">
                <div class="file_group">
                    <span class="_order">1. </span>
                    <input type="file" id="store_logo_file">
                    <label for="store_logo_file">
                    <img src="img/download.svg" alt="">
                    <span class="file_text">Logo</span>
                    </label>
                </div>
                <p class="_text">Elanın aktiv olma müddəti <strong>1 gündür</strong>. 1 gündən sonra elanınız səhifədən silinəcək.</p>
                </div>
                
                <div class="second_box">
                <div class="file_group">
                    <span class="_order">2. </span>
                    <input type="file" id="store_baner_file">
                    <label for="store_baner_file">
                    <img src="img/download.svg" alt="">
                    <span class="file_text">Banner</span>
                    </label>
                </div>
                <p class="_text">Elanın aktiv olma müddəti <strong>1 gündür</strong>. 1 gündən sonra elanınız səhifədən silinəcək.</p>
                </div>
            </div>

            <div class="empty_area"></div>
            </div>
        </div>

        
        <div class="form_btn">
            <button type="button" data-toggle='modal' data-target='#checkApplyModal'>
            Yadda saxla
            </button>

            <div class="empty_area"></div>
        </div>
    
    </form>  
</div>