/* =========================================================
   Rim Medical — طبقة البيانات (Data Layer)
   ---------------------------------------------------------
   هذه الطبقة هي الوسيط الوحيد بين الصفحات والبيانات.
   حالياً تعتمد على: البيانات الافتراضية (data.js) + localStorage.
   عند الترقية لاحقاً إلى Supabase/Firebase يكفي تعديل هذا الملف
   فقط، بدون لمس صفحات الموقع أو لوحة التحكم.
   ========================================================= */

(function () {
  "use strict";

  var STORAGE_KEY = "rim_medical_data_v1";

  function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function getDefaults() {
    return deepClone(window.RIM_DEFAULT_DATA);
  }

  /* قراءة البيانات: المحفوظ في المتصفح إن وُجد، وإلا الافتراضي */
  function getData() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        var saved = JSON.parse(raw);
        if (saved && saved.settings && Array.isArray(saved.products)) {
          /* بيانات محفوظة قبل إضافة ميزة الفئات؟ نكمّلها من الافتراضي */
          if (!Array.isArray(saved.categories) || !saved.categories.length) {
            saved.categories = getDefaults().categories;
          }
          return saved;
        }
      }
    } catch (e) {
      /* بيانات تالفة أو تخزين غير متاح — نعود للافتراضي */
    }
    return getDefaults();
  }

  /* حفظ البيانات في المتصفح */
  function saveData(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (e) {
      return false;
    }
  }

  /* حذف التعديلات المحلية والعودة للبيانات الافتراضية */
  function resetData() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  }

  /* هل توجد تعديلات محلية غير منشورة؟ */
  function hasLocalChanges() {
    try {
      return localStorage.getItem(STORAGE_KEY) !== null;
    } catch (e) {
      return false;
    }
  }

  /* توليد محتوى ملف data.js جديد من البيانات الحالية (للنشر) */
  function exportDataFile() {
    var data = getData();
    return (
      "/* Rim Medical — ملف البيانات (تم توليده من لوحة التحكم بتاريخ " +
      new Date().toLocaleString() +
      ") */\n" +
      "window.RIM_DEFAULT_DATA = " +
      JSON.stringify(data, null, 2) +
      ";\n"
    );
  }

  /* رابط واتساب جاهز */
  function waLink(number, text) {
    var clean = String(number || "").replace(/[^0-9]/g, "");
    var url = "https://wa.me/" + clean;
    if (text) url += "?text=" + encodeURIComponent(text);
    return url;
  }

  window.RimStore = {
    STORAGE_KEY: STORAGE_KEY,
    getDefaults: getDefaults,
    getData: getData,
    saveData: saveData,
    resetData: resetData,
    hasLocalChanges: hasLocalChanges,
    exportDataFile: exportDataFile,
    waLink: waLink
  };
})();
