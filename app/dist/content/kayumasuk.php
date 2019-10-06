  <!-- Page Wrapper -->
  <div id="wrapper">

    <!-- Sidebar -->
    <?php include 'dist/left-nav.php' ?>
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

      <!-- Main Content -->
      <div id="content">

        <!-- Topbar -->
        <?php include 'dist/navbar.php' ?>
        <!-- End of Topbar -->

        <!-- Begin Page Content -->
        <div class="container-fluid">

          <!-- Page Heading -->
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h2 class="mb-0 text-gray-800">Transaksi Kayu Masuk</h2>
          </div>
        </div>

          <!-- Form kayumasuk -->
          <!-- Container fluid -->
          <?php include 'form/kayumasuk.php' ?>
          <!-- End Container fluid -->

          <!-- Table kayumasuk -->
          <!-- Container fluid  -->
          <?php include 'dataTable/kayumasuk.php' ?>
          <!-- End Container fluid  -->

      </div>
      <!-- End of Main Content -->

      <?php include 'dist/footer.php' ?>

    </div>
    <!-- End of Content Wrapper -->

  </div>
  <!-- End of Page Wrapper -->

  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>