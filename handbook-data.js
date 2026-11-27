/* handbook-data.js — Nội dung tab "Sổ tay" của COPELANDselect.
   Engine hiển thị: handbook.js (giống hệt bản ở MYCOMselect / GEAselect).

   Nguồn (chỉ tóm tắt số liệu, không chép tài liệu):
   - Product Brochure "Copeland Compressors and Condensing Units for Refrigeration Applications" (Asia, 2023)
   - "System start-up and operational check sheet" — ZX condensing unit (2020/MEA/66) */

const HB_GROUPS = {
  unit:   ["Cụm máy ZX", "ZX units"],
  common: ["Chung", "General"],
};

const SRC_CAT = "Copeland — Compressors and Condensing Units for Refrigeration Applications (brochure, 2023)";
const SRC_CHK = "Copeland/Emerson — System start-up and operational check sheet, ZX condensing unit";
const COND_STD = ["Điều kiện: môi trường 32 °C; MT bay hơi −10 °C, LT −35 °C; hơi hút 20 °C; 50 Hz; R404A.",
                  "Conditions: ambient 32 °C; MT evap −10 °C, LT −35 °C; suction gas 20 °C; 50 Hz; R404A."];

const HB_CARDS = [
  {
    id: "zx-name", group: "unit", icon: "box",
    title: ["Đọc tên model cụm máy ZX", "Reading a ZX unit model code"],
    src: SRC_CAT,
    blocks: [
      { type: "table",
        head: [["Tiền tố", "Prefix"], ["Loại cụm máy", "Unit type"]],
        rows: [
          ["ZX",   ["Nhiệt độ trung bình (MT), máy nén scroll tốc độ cố định", "Medium temp (MT), fixed-speed scroll"]],
          ["ZXL",  ["Nhiệt độ thấp (LT), tốc độ cố định", "Low temp (LT), fixed speed"]],
          ["ZXD",  ["MT, máy nén scroll Digital (điều chỉnh tải liên tục)", "MT, Digital scroll (continuous modulation)"]],
          ["ZXLD", ["LT, scroll Digital", "LT, Digital scroll"]],
          ["ZXV",  ["MT, máy nén biến tần (variable speed)", "MT, variable speed"]],
          ["ZXLV", ["LT, máy nén biến tần", "LT, variable speed"]],
        ] },
      { type: "list", items: [
        ["Ba chữ số sau tiền tố ≈ mã lực × 10: ZX020 = 2 HP, ZXL035 = 3,5 HP, ZXD120 = 12 HP (riêng ZX076 = 7,6 HP).", "Three digits ≈ HP × 10: ZX020 = 2 HP, ZXL035 = 3.5 HP, ZXD120 = 12 HP (ZX076 = 7.6 HP)."],
        ["Hậu tố CE: bản dàn ngưng microchannel (theo catalogue).", "Suffix CE: microchannel condenser version (per catalogue)."],
      ] },
      { type: "table",
        head: [["Mã điện (motor)", "Motor code"], ["Nguồn điện", "Supply"]],
        rows: [
          ["PFJ", ["1 pha 220/240 V – 50 Hz", "1 ph 220/240 V – 50 Hz"]],
          ["TFD", ["3 pha 380/420 V – 50 Hz", "3 ph 380/420 V – 50 Hz"]],
          ["PFV", ["1 pha 208/230 V – 60 Hz", "1 ph 208/230 V – 60 Hz"]],
          ["TF5", ["3 pha 200/230 V – 60 Hz", "3 ph 200/230 V – 60 Hz"]],
          ["TF7", ["3 pha 380 V – 60 Hz", "3 ph 380 V – 60 Hz"]],
        ],
        note: ["Không phải model nào cũng có đủ các mã điện — xem bảng công suất.", "Not every model comes in every motor code — see the capacity tables."] },
    ],
  },
  {
    id: "zx-cap", group: "unit", icon: "snowflake",
    title: ["Công suất cụm máy ZX / ZXL và mã điện có sẵn", "ZX / ZXL capacity and available motor codes"],
    src: SRC_CAT,
    blocks: [
      { type: "p", text: ["Môi chất: R22, R404A, R448A, R449A, R507, R407F. Dàn ngưng ống đồng cánh nhôm.", "Refrigerants: R22, R404A, R448A, R449A, R507, R407F. Fin-and-tube condenser."] },
      { type: "table",
        head: ["Model", ["Công suất (kW)", "Capacity (kW)"], "HP", ["Mã điện", "Motor codes"]],
        rows: [
          ["ZX020", "3.9", "2", "PFJ, TFD, PFV, TF5, TF7"],
          ["ZX025", "4.4", "2.5", "PFJ"],
          ["ZX030", "5.4", "3", "PFJ, TFD, PFV, TF5, TF7"],
          ["ZX040", "7.1", "4", "PFJ, TFD, PFV, TF5, TF7"],
          ["ZX050", "9.8", "5", "TFD, PFV, TF5, TF7"],
          ["ZX060", "10.8", "6", "TFD, TF5, TF7"],
          ["ZX075", "11.8", "7.5", "TFD, TF5, TF7"],
          ["ZX076", "12.1", "7.6", "TFD"],
          ["ZXL020", "1.8", "2", "PFJ, TFD, PFV, TF5, TF7"],
          ["ZXL025", "2.3", "2.5", "PFJ, TFD, TF5, TF7"],
          ["ZXL030", "2.5", "3", "PFJ, TFD, PFV, TF5, TF7"],
          ["ZXL035", "3.2", "3.5", "TFD, PFV, TF5, TF7"],
          ["ZXL040", "3.8", "4", "TFD, PFV, TF5, TF7"],
          ["ZXL050", "4.3", "5", "TFD, PFV, TF5, TF7"],
          ["ZXL060", "5.3", "6", "TFD, TF5, TF7"],
          ["ZXL075", "5.9", "7.5", "TFD, TF5, TF7"],
        ],
        note: COND_STD },
      { type: "alert", tone: "info", text: ["Môi trường dưới +10 °C: cần điều khiển tốc độ quạt dàn ngưng để chạy ổn định.", "Ambient below +10 °C: condenser fan speed control is needed."] },
    ],
  },
  {
    id: "zx-digital", group: "unit", icon: "gauge",
    title: ["Cụm máy ZX Digital (ZXD / ZXLD)", "ZX Digital units (ZXD / ZXLD)"],
    src: SRC_CAT,
    blocks: [
      { type: "list", items: [
        ["Scroll Digital điều chỉnh công suất theo tải: giữ nhiệt độ phòng ±0,5 °C (cụm máy thường ±3 °C).", "Digital scroll matches capacity to load: room held to ±0.5 °C (standard unit ±3 °C)."],
        ["Hợp kho lạnh / siêu thị nhiều dàn lạnh, nhiều tủ trưng bày; kiểm soát được độ ẩm, giảm mất nước và hao hụt khối lượng hàng.", "Suits cold rooms / stores with many evaporators or cases; humidity control, less dehydration and weight loss."],
        ["Môi chất: R22, R404A, R448A, R449A.", "Refrigerants: R22, R404A, R448A, R449A."],
      ] },
      { type: "table",
        head: ["Model", ["Công suất (kW)", "Capacity (kW)"], "HP", ["Mã điện", "Motor codes"]],
        rows: [
          ["ZXD030", "5.2", "3", "TFD, TF7"], ["ZXD040", "7.9", "4", "TFD, TF5, TF7"], ["ZXD050", "9.8", "5", "TFD, TF5, TF7"],
          ["ZXD060", "10.7", "6", "TFD, TF5, TF7"], ["ZXD075", "11.8", "7.5", "TFD, TF5, TF7"], ["ZXD076", "12.1", "8", "TFD"],
          ["ZXD090", "14.5", "9", "TFD"], ["ZXD120", "22.1", "12", "TFD"], ["ZXD160", "27.5", "16", "TFD"], ["ZXD200", "34.5", "20", "TFD"],
          ["ZXLD090", "6.6", "9", "TFD"], ["ZXLD120", "10.3", "12", "TFD"], ["ZXLD160", "13.8", "16", "TFD"], ["ZXLD200", "15.9", "20", "TFD"],
        ],
        note: COND_STD },
    ],
  },
  {
    id: "zx-vs", group: "unit", icon: "zap",
    title: ["Cụm máy biến tần ZXV / ZXLV", "Variable speed units ZXV / ZXLV"],
    src: SRC_CAT,
    blocks: [
      { type: "p", text: ["Tăng công suất khi kéo nhiệt (pull-down), giảm công suất theo tải ngoài giờ cao điểm. Môi chất R404A, R448A, R449A.", "Extra capacity for pull-down, modulates down off-peak. Refrigerants R404A, R448A, R449A."] },
      { type: "table",
        head: ["Model", ["Tối thiểu (kW)", "Min (kW)"], ["Danh định (kW)", "Nominal (kW)"], ["Tối đa (kW)", "Max (kW)"]],
        rows: [
          ["ZXV065", "2.58", "6.20", "7.87"], ["ZXV085", "3.27", "7.85", "9.97"], ["ZXV130", "4.05", "10.08", "14.38"],
          ["ZXLV030", "0.92", "2.30", "3.01"], ["ZXLV040", "1.16", "2.91", "3.81"], ["ZXLV050", "1.41", "3.81", "5.12"],
        ],
        note: ["Điều kiện: môi trường 32 °C; MT −10 °C, LT −35 °C; gas về 5 °C; 50 Hz; R404A. Mã điện 4XD, 4XK, 5XJ.", "Conditions: ambient 32 °C; MT −10 °C, LT −35 °C; return gas 5 °C; 50 Hz; R404A. Motor codes 4XD, 4XK, 5XJ."] },
    ],
  },
  {
    id: "zx-ce", group: "unit", icon: "layers",
    title: ["ZX dàn ngưng microchannel (bản CE)", "ZX with microchannel condenser (CE)"],
    src: SRC_CAT,
    blocks: [
      { type: "table",
        head: ["Model", ["Công suất (kW)", "Capacity (kW)"], "HP"],
        rows: [
          ["ZX020CE", "3.9", "2"], ["ZX030CE", "5.5", "3"], ["ZX040CE", "7.3", "4"], ["ZX050CE", "9.1", "5"], ["ZX060CE", "10.9", "6"], ["ZX075CE", "12.1", "7.5"],
          ["ZXD030CE", "5.3", "3"], ["ZXD040CE", "7.3", "4"], ["ZXD050CE", "9.1", "5"], ["ZXD060CE", "10.9", "6"], ["ZXD076CE", "12.1", "7.5"], ["ZXD090CE", "15.2", "9"],
          ["ZXL020CE", "1.8", "2"], ["ZXL025CE", "2.3", "2.5"], ["ZXL030CE", "2.6", "3"], ["ZXL035CE", "3.2", "3.5"], ["ZXL040CE", "3.8", "4"],
          ["ZXL050CE", "4.5", "5"], ["ZXL060CE", "5.5", "6"], ["ZXL075CE", "5.9", "7.5"], ["ZXLD090CE", "6.7", "9"],
        ],
        note: ["Số liệu sơ bộ của hãng. Điều kiện: môi trường 32 °C; MT −10 °C, LT −35 °C; hơi hút 18,3 °C; 50 Hz; R404A. Môi chất R404A, R448A, R449A; mã điện TFD.",
               "Preliminary maker data. Conditions: ambient 32 °C; MT −10 °C, LT −35 °C; suction gas 18.3 °C; 50 Hz; R404A. R404A, R448A, R449A; motor TFD."] },
    ],
  },
  {
    id: "zx-features", group: "unit", icon: "cog",
    title: ["Tính năng chính của cụm máy ZX", "Key ZX unit features"],
    src: SRC_CAT,
    blocks: [
      { type: "list", items: [
        ["Máy nén scroll Copeland + bộ điều khiển tốc độ quạt + dàn ngưng tối ưu + thuật toán điều khiển riêng.", "Copeland scroll + fan speed controller + optimised condenser + control algorithms."],
        ["Tuỳ chọn Digital (điều chỉnh tải) và phun hơi EVI để tăng hiệu suất, nhất là nhiệt độ thấp.", "Digital modulation and EVI vapour injection options raise efficiency, especially at low temp."],
        ["Bộ điều khiển có bảo vệ và chẩn đoán lỗi, giúp giảm chi phí bảo trì.", "Controller with protection and diagnostics to cut maintenance cost."],
        ["Áo cách âm máy nén giảm ồn và rung; thân máy mỏng, nhẹ, lắp được nơi chật.", "Compressor sound jacket cuts noise and vibration; slim, light cabinet for tight spaces."],
        ["Cổng RS485 kết nối Dixell XWeb để giám sát thời gian thực.", "RS485 port for Dixell XWeb real-time monitoring."],
      ] },
    ],
  },

  // ===================== CHUNG =====================
  {
    id: "zx-startup", group: "common", icon: "list-checks",
    title: ["Checklist khởi động & kiểm tra vận hành cụm máy ZX", "ZX start-up & operational checklist"],
    src: SRC_CHK,
    blocks: [
      { type: "p", text: ["Theo phiếu kiểm tra khởi động của hãng. Tick từng mục khi làm xong, trạng thái lưu trên máy này; số đo ghi vào phiếu giấy hoặc báo cáo.",
                          "Based on the maker's start-up check sheet. Tick each item; progress is saved on this device. Record readings on the sheet or report."] },
      { type: "checklist", id: "zx-startup", groups: [
        { title: ["Thông tin", "Details"], items: [
          ["Ghi model, số serial, vị trí cụm máy; hãng/model dàn lạnh", "Record CDU model, serial, location; indoor unit make/model"],
          ["Mã phòng/tủ, chiều dài ống (ước tính), nhiệt độ ngoài trời lúc khởi động", "Room/case ID, approx. pipe length, outdoor temp at start-up"],
        ] },
        { title: ["Thử kín & hút chân không", "Leak test & evacuation"], items: [
          ["Thử kín bằng áp suất (ghi áp suất và số giờ giữ áp)", "Pressure leak test (record pressure and hours held)"],
          ["Hệ thống kín, không xì", "System leak tight"],
          ["Hút chân không 3 lần (triple evacuation)", "Triple evacuation"],
          ["Ghi số đo đồng hồ micron và kết quả giữ chân không", "Record micron gauge reading and hold result"],
        ] },
        { title: ["Nạp gas & kiểm tra", "Charge & checks"], items: [
          ["Ghi loại môi chất và tổng lượng nạp (kg)", "Record refrigerant and total charge (kg)"],
          ["Kính xem lỏng trong (không bọt)", "Sight glass clear"],
          ["Quạt dàn lạnh chạy", "Evaporator fans running"],
          ["Ống lỏng đã bọc cách nhiệt", "Liquid line insulated"],
          ["Tiếng ồn và rung bình thường", "Sound and vibration normal"],
          ["Cánh dàn ngưng sạch, không hư", "Condenser fins clean and undamaged"],
        ] },
        { title: ["Thông số vận hành", "Operating data"], items: [
          ["Điện áp và dòng điện máy nén", "Compressor voltage and current"],
          ["Áp suất hút và áp suất đường lỏng", "Suction and liquid line pressure"],
          ["Nhiệt độ hút, nhiệt độ đẩy, nhiệt độ đường lỏng", "Suction, discharge and liquid line temperature"],
          ["Tính độ quá nhiệt máy nén (mục tiêu 10–20 K) và độ quá lạnh", "Compressor superheat (target 10–20 K) and subcooling"],
          ["Cài đặt rơ-le áp thấp (LP) điều chỉnh được", "Adjustable LP set point"],
          ["Nhiệt độ thiết kế so với nhiệt độ phòng/tủ thực tế", "Design temp vs actual room/case temp"],
        ] },
      ] },
    ],
  },
  {
    id: "sh-sc", group: "common", icon: "thermometer",
    title: ["Cách tính độ quá nhiệt & độ quá lạnh", "Calculating superheat & subcooling"],
    src: SRC_CHK,
    blocks: [
      { type: "table",
        head: [["Đại lượng", "Quantity"], ["Cách tính", "How"], ["Đo ở đâu", "Where"]],
        rows: [
          [["Độ quá nhiệt máy nén (SH)", "Compressor superheat (SH)"], ["T1 − Tbh(P1)", "T1 − Tsat(P1)"], ["T1: nhiệt độ ống hút sát máy nén; P1: áp suất hút, đổi ra nhiệt độ bão hoà theo bảng P-T", "T1: suction line temp at compressor; P1: suction pressure → saturation temp from P-T chart"]],
          [["Độ quá lạnh (SC)", "Subcooling (SC)"], ["Tbh(P2) − T2", "Tsat(P2) − T2"], ["P2: áp suất đường lỏng, đổi ra nhiệt độ bão hoà; T2: nhiệt độ ống lỏng trước van tiết lưu", "P2: liquid line pressure → saturation temp; T2: liquid line temp before the TXV"]],
        ] },
      { type: "list", items: [
        ["Độ quá nhiệt máy nén mục tiêu theo phiếu của hãng: 10–20 K.", "Target compressor superheat per the maker's sheet: 10–20 K."],
        ["Môi chất zeotrope (R407F, R448A, R449A): dùng nhiệt độ điểm sương (dew) cho SH và điểm sôi (bubble) cho SC.", "Zeotropic blends (R407F, R448A, R449A): use dew point for SH and bubble point for SC."],
      ] },
    ],
  },
  {
    id: "cope-lines", group: "common", icon: "boxes",
    title: ["Các dòng cụm máy Copeland khác", "Other Copeland condensing unit lines"],
    src: SRC_CAT,
    blocks: [
      { type: "table",
        head: [["Dòng", "Line"], ["Mô tả", "Description"]],
        rows: [
          [["ZX lớn (ZXD/ZXLD 9–20 HP)", "Large ZX (ZXD/ZXLD 9–20 HP)"], ["Mở rộng ZX cho hệ lạnh quy mô lớn", "Extends ZX to large-scale refrigeration"]],
          ["KHZ", ["Cụm máy scroll trong nhà; máy nén ZB (MT) hoặc ZSI (MT mở rộng)", "Indoor scroll unit; ZB (MT) or ZSI (extended MT) compressors"]],
          ["KHZ LVL", ["Cụm máy scroll phun hơi trong nhà cho nhiệt độ thấp, kèm đủ phụ kiện hệ thống", "Indoor vapour-injection scroll unit for low temp, full system components"]],
          [["F-Series", "F-Series"], ["Cụm máy scroll trong nhà gọn; bản tối ưu môi trường nóng (vùng Vịnh) và ôn hoà", "Compact indoor scroll; high-ambient (Gulf) and mid-ambient versions"]],
          [["Bán kín Discus (S/H)", "Semi-hermetic Discus"], ["Cụm máy cao cấp dùng máy nén Copeland Discus, có điện tử chẩn đoán; có bản 2 cấp", "Premium Discus units with diagnostics; two-stage versions available"]],
          [["Giải nhiệt nước", "Water-cooled"], ["Dàn ngưng ống lồng (co-axial) hoặc ống chùm (shell & tube); dễ vệ sinh", "Co-axial or shell-and-tube condenser; easy to clean"]],
          [["Cụm nhiều máy nén (rack)", "Multi-compressor rack"], ["Quản lý dầu, điện tử bảo vệ và chẩn đoán tích hợp — cho siêu thị", "Oil management, integrated protection and diagnostics — for supermarkets"]],
        ] },
    ],
  },
];

// Tài liệu Copeland trong thư mục không nêu chu kỳ bảo trì theo giờ → không có máy tính mốc bảo trì.
const HB_MAINT = {};
