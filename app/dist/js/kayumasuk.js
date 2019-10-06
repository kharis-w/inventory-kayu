var shortcut = document.pembayaran;

jQuery(document).ready(function() {
    // hide panelForm1
    jQuery('#panelForm1').hide();
    // add button
    jQuery('#btn-add-pembayaran').click(function() {
        jQuery('#bookform_input')[0].reset();
        jQuery('#panelForm2').hide(500);
        jQuery('#panelForm1').show(500);
        jQuery('#act').val('addpembayaran');
        $('#id_pembayaran').prop('readonly', false);
    });
    // cancel button
    jQuery('#btn-cancel1').click(function() {
        jQuery('#bookform_input')[0].reset();
        jQuery('#panelForm1').hide(500);
        jQuery('#act').val('');
        jQuery('#next-form').val('');
    });
});

jQuery(document).ready(function() {
    // hide panelForm1
    jQuery('#panelForm2').hide();
    // add button
    jQuery('#btn-print-pembayaran').click(function() {
        jQuery('#bookform_input')[0].reset();
        jQuery('#panelForm1').hide(500);
        jQuery('#panelForm2').show(500);
        jQuery('#act_print').val('printpembayaran');
        $('#id_pembayaran').prop('readonly', false);
    });
    // cancel button
    jQuery('#btn-cancel2').click(function() {
        jQuery('#bookform_print')[0].reset();
        jQuery('#panelForm2').hide(500);
        jQuery('#act_print').val('');
        jQuery('#next-form').val('');
    });
});

 $('#demoDate1').datepicker({
          format: "dd-mm-yyyy",
          autoclose: true,
          todayHighlight: true
        });
    $('#demoDate2').datepicker({
          format: "dd-mm-yyyy",
          autoclose: true,
          todayHighlight: true
        });


var shortcut = document.bookform_input;

// Tambah pembayaran
function addpembayaran() {
    var form                = $('#bookform_input')[0];
    var formData            = new FormData(form);
    var id_pembayaran       = $('#id_pembayaran').val();
    var tgl_pembayaran      = $('#tgl_pembayaran').val();
    var nis                 = $('#nis').val();
    var nama                = $('#nama').val();
    var kelas               = $('#kelas').val();
    var jenis_pembayaran    = $('#jenis_pembayaran').val();
    var jumlah_pembayaran   = $('#jumlah_pembayaran').val();
    var createdby           = $('#createdby').val();
    var dateandtime         = $('#dateandtime').val();
    var act                 = $('#act').val();
    var id                  = $('#id').val();

    if (shortcut.nis.value == "") {
        shortcut.nis.style.borderColor = '#ff3333';
        shortcut.nis.style.borderWidth = "medium";
        shortcut.nis.focus();
        return false;
    } else shortcut.nis.style.borderColor = '#33ff33';
    shortcut.nis.style.borderWidth = "medium";
    if (shortcut.tgl_pembayaran.value == "") {
        shortcut.tgl_pembayaran.style.borderColor = '#ff3333';
        shortcut.tgl_pembayaran.style.borderWidth = "medium";
        shortcut.tgl_pembayaran.focus();
        return false;
    } else shortcut.tgl_pembayaran.style.borderColor = '#33ff33';
    shortcut.tgl_pembayaran.style.borderWidth = "medium";
    if (shortcut.nama.value == "") {
        shortcut.nama.style.borderColor = '#ff3333';
        shortcut.nama.style.borderWidth = "medium";
        shortcut.nama.focus();
        return false;
    } else shortcut.nama.style.borderColor = '#33ff33';
    shortcut.nama.style.borderWidth = "medium";
    if (shortcut.kelas.value == "") {
        shortcut.kelas.style.borderColor = '#ff3333';
        shortcut.kelas.style.borderWidth = "medium";
        shortcut.kelas.focus();
        return false;
    } else shortcut.kelas.style.borderColor = '#33ff33';
    shortcut.kelas.style.borderWidth = "medium";
    if (shortcut.jenis_pembayaran.value == "") {
        shortcut.jenis_pembayaran.style.borderColor = '#ff3333';
        shortcut.jenis_pembayaran.style.borderWidth = "medium";
        shortcut.jenis_pembayaran.focus();
        return false;
    } else shortcut.jenis_pembayaran.style.borderColor = '#33ff33';
    shortcut.jenis_pembayaran.style.borderWidth = "medium";
    if (shortcut.jumlah_pembayaran.value == "") {
        shortcut.jumlah_pembayaran.style.borderColor = '#ff3333';
        shortcut.jumlah_pembayaran.style.borderWidth = "medium";
        shortcut.jumlah_pembayaran.focus();
        return false;
    } else shortcut.jumlah_pembayaran.style.borderColor = '#33ff33';
    shortcut.jumlah_pembayaran.style.borderWidth = "medium";

    $.post("modul/pembayaran.php", {
        act                 : act,
        id                  : id,
        id_pembayaran       : id_pembayaran,
        tgl_pembayaran      : tgl_pembayaran,
        nis                 : nis,
        nama                : nama,
        kelas               : kelas,
        jenis_pembayaran    : jenis_pembayaran,
        jumlah_pembayaran   : jumlah_pembayaran,
        createdby           : createdby,
        dateandtime         : dateandtime
    }, function(data, status) {
        if (data == '1') {
            location.reload();
        } else {swal("Mohon Periksa Kembali Data Yang Anda Masukkan !", {
                        icon: "error",
                    })
    }
    });
}

// Edit pembayaran
function editData(id) {
    $.post("modul/pembayaran.php", {
        id  : id,
        act : 'pembayaran'
    }, function(data, status) {
        if (status == 'success') {
            var temp = data.split('#');
            jQuery('#panelForm1').show(500);
            jQuery('#act').val('editpembayaran');
            jQuery('#id').val(temp[0]);
            $('#id_pembayaran').val(temp[0]);
            $('#tgl_pembayaran').val(temp[1]);
            $('#nis').val(temp[2]);
            $('#nama').val(temp[3]);
            $('#kelas').val(temp[4]);
            $('#jenis_pembayaran').val(temp[5]);
            $('#jumlah_pembayaran').val(temp[6]);
            $('#id_pembayaran').prop('readonly', true);
        }
    });
}

// Hapus pembayaran
function delData(id, no) {
    swal({
        title       : "Apakah anda yakin ?",
        text        : "File yang dihapus tidak dapat dikembalikan !",
        icon        : "warning",
        buttons     : ["Batal", "Hapus"],
        dangerMode  : true,
    }).then((isConfirm) => {
        if (isConfirm) {
            $.post("modul/pembayaran.php", {
                act: 'delpembayaran',
                id: id
            }, function(data, status) {
                if (status == 'success') {
                    swal("Data berhasil dihapus!", {
                        icon: "success",
                    }).then(function() {
                        location.reload();
                    });
                    $('#row' + no).remove();
                }
            });
        }
    });
}


var shortcut1 = document.bookform_print;

// Tambah pembayaran
function check() {
    var form                = $('#bookform_print')[0];
    var formData            = new FormData(form);
    var demoDate1       = $('#demoDate1').val();
    var demoDate2      = $('#demoDate2').val();
    var jenis_pembayaran_print                 = $('#jenis_pembayaran_print').val();

    if (shortcut1.demoDate1.value == "") {
        shortcut1.demoDate1.style.borderColor = '#ff3333';
        shortcut1.demoDate1.style.borderWidth = "medium";
        shortcut1.demoDate1.focus();
        return false;
    } else shortcut1.demoDate1.style.borderColor = '#33ff33';
    shortcut1.demoDate1.style.borderWidth = "medium";
    if (shortcut1.demoDate2.value == "") {
        shortcut1.demoDate2.style.borderColor = '#ff3333';
        shortcut1.demoDate2.style.borderWidth = "medium";
        shortcut1.demoDate2.focus();
        return false;
    } else shortcut1.demoDate2.style.borderColor = '#33ff33';
    shortcut1.demoDate2.style.borderWidth = "medium";
    if (shortcut1.kelas_print.value == "") {
        shortcut1.kelas_print.style.borderColor = '#ff3333';
        shortcut1.kelas_print.style.borderWidth = "medium";
        shortcut1.kelas_print.focus();
        return false;
    } else shortcut1.kelas_print.style.borderColor = '#33ff33';
    shortcut1.kelas_print.style.borderWidth = "medium";
    if (shortcut1.jenis_pembayaran_print.value == "") {
        shortcut1.jenis_pembayaran_print.style.borderColor = '#ff3333';
        shortcut1.jenis_pembayaran_print.style.borderWidth = "medium";
        shortcut1.jenis_pembayaran_print.focus();
        return false;
    } else shortcut1.jenis_pembayaran_print.style.borderColor = '#33ff33';
    shortcut1.jenis_pembayaran_print.style.borderWidth = "medium";
}

function autofill(){
    var nis = $("#nis").val();
    $.ajax({
        url: 'modul/autofill.php',
        data:"nis="+nis,
        success:function (data) {
            var json = data,
            obj = JSON.parse(json);
            $('#nama').val(obj.nama);
            $('#kelas').val(obj.kelas);
        }
    });
}

function check_biaya(){
    var nis = $("#nis").val();
    var jenis_pembayaran = $("#jenis_pembayaran").val();
    $.ajax({
        url: 'modul/checkbiaya.php',
        data:"nis="+nis+'&'+"jenis_pembayaran="+jenis_pembayaran,
        success:function (data) {
            var json = data,
            obj = JSON.parse(json);
            $('#jumlah_pembayaran').val(obj.biaya);
        }
    });
}