<div class="container-fluid" id="panelForm1">
    <!-- Table -->
    <div class="row">
        <div class="col-sm-12">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <div class="d-md-flex align-items-center">
                    <div align="center" class="col-sm-12">
                      <h3 class="m-0 font-weight-bold text-primary">Form kayumasuk</h3>
                    </div>
                  </div>
                </div>
                <div class="card-body col-sm-12">
                    <!-- Form -->
                    <form action="print-bukti-kayumasuk.php" enctype="multipart/form-data" id="bookform_input" method="post" name="bookform_input" autocomplete="off" target="_blank">
                      <div class="row">
                        <div class="form-group col-sm-6">
                            <label>Tanggal kayumasuk :</label>
                            <input class="form-control" id="tgl_kayumasuk" name="tgl_kayumasuk" type="text" value="<?php echo date('d-m-Y') ;?>" readonly>
                        </div>
                        <div class="form-group col-sm-6">
                            <label class="text-danger text-lg">*</label>
                            <label>NIS :</label>
                            <input class="form-control" id="nis" name="nis" type="number" onkeyup="autofill()">
                        </div>
                        <div class="form-group col-sm-6">
                            <label class="text-danger text-lg">*</label>
                            <label>Nama Siswa :</label>
                            <input class="form-control" id="nama" name="nama" type="text" readonly="">
                        </div>
                        <div class="form-group col-sm-6">
                            <label class="text-danger text-lg">*</label>
                            <label>Kelas :</label>
                            <input class="form-control" id="kelas" name="kelas" type="text" readonly="">
                        </div>
                        <div class="form-group col-sm-6">
                            <label class="text-danger text-lg">*</label>
                            <label>Jenis kayumasuk :</label>
                            <select class="form-control" id="jenis_kayumasuk" name="jenis_kayumasuk">
                              <option value="" disabled selected>Pilih Jenis kayumasuk</option>
                              <option value="LKS">LKS</option>
                              <option value="SPP">SPP</option>
                              <option value="SERAGAM">SERAGAM</option>
                            </select>
                        </div>
                        <div class="form-group col-sm-6">
                            <label class="text-danger text-lg">*</label>
                            <label>Jumlah kayumasuk :</label>
                            <input class="form-control" id="jumlah_kayumasuk" name="jumlah_kayumasuk" type="number">
                        </div>
                    </div>
                        <div class="row">
                        <div align="right" class="form-group col-sm-12">
                            <input class="form-control" id="act" name="act" type="hidden" readonly="">
                            <input class="form-control" id="id" name="id" type="hidden" readonly="">
                        </div>
                        <div align="right" class="form-group col-sm-12">
                            <button class="btn btn-circle btn-success" onclick="addkayumasuk()" type="submit" title="Simpan"><i class="fa fa-save fa-lg"></i></button>
                            <button class="btn btn-circle btn-danger" id="btn-cancel1" type="button" title="Batal"><i class="fa fa-times"></i></button>
                        </div></div>
                    </form>
                    <!-- End Form -->
                </div>
            </div>
        </div>
    </div>
</div>