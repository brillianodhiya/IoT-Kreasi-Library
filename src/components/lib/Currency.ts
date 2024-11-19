export interface CurrencyProps {
  value: number;
  type: "default" | "min" | "00" | "terbilang";
  space?: boolean;
}

const angkaTerbilang = (angka: number): string => {
  if (angka === 0) {
    return "nol";
  }

  const bilangan = [
    "",
    "satu",
    "dua",
    "tiga",
    "empat",
    "lima",
    "enam",
    "tujuh",
    "delapan",
    "sembilan",
  ];

  const ribuan = [
    "",
    "ribu",
    "juta",
    "milyar",
    "triliun",
    "kuadriliun",
    "kuintiliun",
    "sekstiliun",
    "septilun",
    "oktiliun",
    "noniliun",
    "desiliun",
  ];

  let terbilang = "";
  let counter = 0;

  while (angka > 0) {
    if (counter >= ribuan.length) {
      return "melebihi batas";
    }

    const sisaBagi = angka % 1000;
    if (sisaBagi > 0) {
      let temp = "";
      let ratusan = Math.floor(sisaBagi / 100);
      let puluhan = Math.floor((sisaBagi % 100) / 10);
      let satuan = sisaBagi % 10;

      if (ratusan > 0) {
        if (ratusan === 1) {
          temp += "seratus";
        } else {
          temp += bilangan[ratusan] + " ratus";
        }
      }

      if (puluhan > 0) {
        if (puluhan === 1) {
          if (satuan === 0) {
            temp += " sepuluh";
          } else if (satuan === 1) {
            temp += " sebelas";
          } else {
            temp += " " + bilangan[satuan] + " belas";
          }
        } else {
          temp += " " + bilangan[puluhan] + " puluh";
        }
      }

      if (satuan > 0 && puluhan !== 1) {
        temp += " " + bilangan[satuan];
      }

      temp += " " + ribuan[counter];
      terbilang = temp.trim() + " " + terbilang;
    }

    angka = Math.floor(angka / 1000);
    counter++;
  }

  return terbilang.trim();
};

const rupiahCurrency = ({
  value,
  type,
  space = true,
}: CurrencyProps): string => {
  let formattedValue: string;

  if (type === "min") {
    formattedValue =
      new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(value) + ",-";
  } else if (type === "00") {
    formattedValue = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);
  } else {
    formattedValue = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  }

  if (type === "terbilang") {
    return angkaTerbilang(value);
  }
  return space ? formattedValue : formattedValue.replace(/\s/g, "");
};

export { rupiahCurrency };
