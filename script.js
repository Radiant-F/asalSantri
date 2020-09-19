const asalSantri = {
    sidik: "Lampung",
    wandi: "Prabumulih",
    rahmad: "Medan",
    usamah: "Ceribon"
};
({
    sidik,
    wandi,
    rahmad,
    usamah,
    ...other
} = asalSantri);
console.log(sidik, wandi, rahmad, usamah);
console.log(other);
