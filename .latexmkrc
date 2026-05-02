$out_dir = '../build';

$pdf_mode = 1;

$pdflatex = 'pdflatex -interaction=nonstopmode -synctex=1 %O %S';

# IMPORTANT: force polling (fixes Docker watch issue)
$latexmk_silent = 1;
$preview_continuous_mode = 1;

# force recheck interval
$poll_interval = 2;
