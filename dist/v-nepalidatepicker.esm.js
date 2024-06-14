import NepaliDate from '../nepali-date/cjs/NepaliDate';

const YEAR_DATES = [{
  year: 2000,
  value: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]
}, {
  year: 2001,
  value: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]
}, {
  year: 2002,
  value: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]
}, {
  year: 2003,
  value: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]
}, {
  year: 2004,
  value: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]
}, {
  year: 2005,
  value: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]
}, {
  year: 2006,
  value: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]
}, {
  year: 2007,
  value: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]
}, {
  year: 2007,
  value: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]
}, {
  year: 2008,
  value: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31]
}, {
  year: 2009,
  value: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]
}, {
  year: 2010,
  value: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]
}, {
  year: 2011,
  value: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]
}, {
  year: 2012,
  value: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30]
}, {
  year: 2013,
  value: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]
}, {
  year: 2014,
  value: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]
}, {
  year: 2015,
  value: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]
}, {
  year: 2016,
  value: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30]
}, {
  year: 2017,
  value: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]
}, {
  year: 2018,
  value: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30]
}, {
  year: 2019,
  value: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]
}, {
  year: 2020,
  value: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30]
}, {
  year: 2021,
  value: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]
}, {
  year: 2022,
  value: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30]
}, {
  year: 2023,
  value: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]
}, {
  year: 2024,
  value: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30]
}, {
  year: 2025,
  value: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]
}, {
  year: 2026,
  value: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]
}, {
  year: 2027,
  value: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]
}, {
  year: 2028,
  value: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]
}, {
  year: 2029,
  value: [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30]
}, {
  year: 2030,
  value: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]
}, {
  year: 2031,
  value: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]
}, {
  year: 2032,
  value: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]
}, {
  year: 2033,
  value: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]
}, {
  year: 2034,
  value: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]
}, {
  year: 2035,
  value: [30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31]
}, {
  year: 2036,
  value: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]
}, {
  year: 2037,
  value: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]
}, {
  year: 2038,
  value: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]
}, {
  year: 2039,
  value: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30]
}, {
  year: 2040,
  value: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]
}, {
  year: 2041,
  value: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]
}, {
  year: 2042,
  value: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]
}, {
  year: 2043,
  value: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30]
}, {
  year: 2044,
  value: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]
}, {
  year: 2045,
  value: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30]
}, {
  year: 2046,
  value: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]
}, {
  year: 2047,
  value: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30]
}, {
  year: 2048,
  value: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]
}, {
  year: 2049,
  value: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30]
}, {
  year: 2050,
  value: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]
}, {
  year: 2051,
  value: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30]
}, {
  year: 2052,
  value: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]
}, {
  year: 2053,
  value: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30]
}, {
  year: 2054,
  value: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]
}, {
  year: 2055,
  value: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]
}, {
  year: 2056,
  value: [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30]
}, {
  year: 2057,
  value: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]
}, {
  year: 2058,
  value: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]
}, {
  year: 2059,
  value: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]
}, {
  year: 2060,
  value: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]
}, {
  year: 2061,
  value: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]
}, {
  year: 2062,
  value: [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31]
}, {
  year: 2063,
  value: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]
}, {
  year: 2064,
  value: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]
}, {
  year: 2065,
  value: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]
}, {
  year: 2066,
  value: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31]
}, {
  year: 2067,
  value: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]
}, {
  year: 2068,
  value: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]
}, {
  year: 2069,
  value: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]
}, {
  year: 2070,
  value: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30]
}, {
  year: 2071,
  value: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]
}, {
  year: 2072,
  value: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30]
}, {
  year: 2073,
  value: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]
}, {
  year: 2074,
  value: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30]
}, {
  year: 2075,
  value: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]
}, {
  year: 2076,
  value: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30]
}, {
  year: 2077,
  value: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]
}, {
  year: 2078,
  value: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30]
}, {
  year: 2079,
  value: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]
}, {
  year: 2080,
  value: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30]
}, {
  year: 2081,
  value: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]
}, {
  year: 2082,
  value: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]
}, {
  year: 2083,
  value: [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30]
}, {
  year: 2084,
  value: [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30]
}, {
  year: 2085,
  value: [31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30]
}, {
  year: 2086,
  value: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]
}, {
  year: 2087,
  value: [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30]
}, {
  year: 2088,
  value: [30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30]
}, {
  year: 2089,
  value: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]
}, {
  year: 2090,
  value: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]
}, {
  year: 2091,
  value: [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30]
}, {
  year: 2092,
  value: [30, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30]
}, {
  year: 2093,
  value: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]
}, {
  year: 2094,
  value: [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30]
}, {
  year: 2095,
  value: [31, 31, 32, 31, 31, 31, 30, 29, 30, 30, 30, 30]
}, {
  year: 2096,
  value: [30, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]
}, {
  year: 2097,
  value: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]
}, {
  year: 2098,
  value: [31, 31, 32, 31, 31, 31, 29, 30, 29, 30, 29, 31]
}, {
  year: 2099,
  value: [31, 31, 32, 31, 31, 31, 30, 29, 29, 30, 30, 30]
}];
const ENGLISH_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const NEPALI_WEEK = ["आइत", "सोम", "मंगल", "बुध", "बिहि", "शुक्र", "शनि"];
const ENGLISH_NEPALI_MONTH = ["Baisakh", "Jestha", "Asar", "Shrawan", "Bhadra", "Aswin", "Kartik", "Mangsir", "Poush", "Magh", "Falgun", "Chaitra"];
const NEPALI_MONTH = ["बैशाख", "जेठ", "असार", "श्रावण", "भाद्र", "आश्विन", "कार्तिक", "मंसिर", "पौष", "माघ", "फाल्गुण", "चैत्र"];

//
var script = {
  name: "VNepalidatepicker",
  // vue component name
  props: {
    value: {
      type: String,
      default: ""
    },
    format: {
      type: String,
      default: "YYYY-MM-DD"
    },
    calenderType: {
      type: String,
      default: "English"
    },
    yearSelect: {
      type: Boolean,
      default: true
    },
    monthSelect: {
      type: Boolean,
      default: true
    },
    classValue: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  model: {
    event: "change"
  },

  data() {
    return {
      date: this.value == "" ? new NepaliDate() : new NepaliDate(this.value),
      formatedValue: this.value,
      visible: false,
      startingYear: 2001,
      numberofYears: 87,
      formatNepali: this.calenderType == "Nepali" ? true : false,
      endDay: null,
      yearValue: this.value == "" ? new NepaliDate().getYear() : new NepaliDate(this.value).getYear(),
      monthValue: this.value == "" ? new NepaliDate().getMonth() : new NepaliDate(this.value).getMonth(),
      startMonthValue: null,
      currentDateValue: undefined
    };
  },

  computed: {
    getMonthsList() {
      return this.formatNepali ? NEPALI_MONTH : ENGLISH_NEPALI_MONTH;
    },

    year() {
      return this.date.year;
    },

    weekdays() {
      return this.formatNepali ? NEPALI_WEEK : ENGLISH_WEEK;
    },

    days() {
      YEAR_DATES.forEach(yearData => {
        if (yearData.year == this.date.year) {
          yearData.value.forEach((data, index) => {
            // compare monthValue selected to index of yearData value
            if (index == this.date.month) {
              this.endDay = data; // eslint-disable-line
            }
          });
        }
      });
      return Array(this.endDay).fill().map((_, idx) => new NepaliDate(this.year, this.date.month, idx + 1));
    },

    startweek() {
      let currentDateValue = new NepaliDate(this.yearValue, this.monthValue, 1);
      ENGLISH_WEEK.forEach((data, index) => {
        if (currentDateValue.format("DDD") == "Sun") {
          this.startMonthValue = 7; // eslint-disable-line
        } else if (currentDateValue.format("DDD") == data) {
          this.startMonthValue = index; // eslint-disable-line
        }
      });
      return this.startMonthValue;
    },

    formatedYearOrMonth() {
      if (this.monthSelect == false && this.yearSelect == false) {
        return this.formatNepali ? this.date.format("mmmm yyyy") : this.date.format("MMMM YYYY");
      }

      if (this.monthSelect == false) {
        return this.formatNepali ? this.date.format("mmmm") : this.date.format("MMMM");
      }

      if (this.yearSelect == false) {
        return this.formatNepali ? this.date.format("yyyy") : this.date.format("YYYY");
      }

      return "";
    },

    formatedYear() {
      return this.formatNepali ? this.date.format("yyyy") : this.date.format("YYYY");
    },

    formatedDate() {
      return this.formatNepali ? this.date.format("dddd, dd mmmm") : this.date.format("DDDD, DD MMMM");
    },

    formatedTodayText() {
      return this.formatNepali ? "आज" : "Today";
    }

  },
  methods: {
    convertToNepali(date) {
      return new NepaliDate(date).format("yyyy-mm-d");
    },

    getNepaliDateWithYear(year) {
      return new NepaliDate(year, 0, 1).format("yyyy-mm-d");
    },

    active(date) {
      return this.date.getTime() === date.getTime();
    },

    checkToday(date) {
      let today = new NepaliDate();
      return date.day == today.day && date.year == today.year && date.month == today.month;
    },

    next() {
      let _month = this.date.month + 1;

      let _year = this.date.year;

      if (_month > 11) {
        _year++;
        _month = 0;
      }

      this.setMonthAndYear(_month, _year);
      this.date = new NepaliDate(_year, _month, 1);
    },

    prev() {
      let _month = this.date.month - 1;

      let _year = this.date.year;

      if (_month < 0) {
        _year--;
        _month = 11;
      }

      this.setMonthAndYear(_month, _year);
      this.date = new NepaliDate(_year, _month, 1);
    },

    monthSelectChange() {
      this.date.setMonth(this.monthValue);
    },

    yearSelectChange() {
      this.date.setYear(this.yearValue);
    },

    select(date) {
      this.date = date;
      this.formatedValue = this.date.format(this.format);
      this.$emit("change", this.formatedValue);
      this.hide();
    },

    show() {
      this.visible = true;
      setTimeout(() => document.addEventListener("click", this.hide), 200);
    },

    hide() {
      this.visible = false;
      document.removeEventListener("click", this.hide);
    },

    today() {
      this.select(new NepaliDate());
      this.setMonthAndYear(this.date.getMonth(), this.date.getYear());
    },

    setMonthAndYear(month, year) {
      this.monthValue = month;
      this.yearValue = year;
    }

  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "datepicker",
    on: {
      "click": function ($event) {
        $event.stopPropagation();
      }
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formatedValue,
      expression: "formatedValue"
    }],
    class: this.classValue,
    attrs: {
      "type": "text",
      "placeholder": this.placeholder
    },
    domProps: {
      "value": _vm.formatedValue
    },
    on: {
      "focus": function ($event) {
        return _vm.show();
      },
      "input": function ($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.formatedValue = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm.visible ? _c('div', {
    class: ['calendar', {
      show: _vm.visible
    }]
  }, [_c('div', {
    staticClass: "calendar__header"
  }, [_c('div', {
    staticClass: "calendar__year"
  }, [_vm._v(_vm._s(_vm.formatedYear))]), _vm._v(" "), _c('div', {
    staticClass: "calendar__date"
  }, [_vm._v(_vm._s(_vm.formatedDate))])]), _vm._v(" "), _c('div', {
    staticClass: "calendar__body"
  }, [_c('div', {
    staticClass: "calendar__month"
  }, [_c('button', {
    staticClass: "calendar__month__prev",
    on: {
      "click": function ($event) {
        return _vm.prev();
      }
    }
  }, [_c('b', [_vm._v(">")])]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.formatedYearOrMonth))]), _vm._v(" "), this.monthSelect ? _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.monthValue,
      expression: "monthValue"
    }],
    staticStyle: {},
    attrs: {
      "size": "mini"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.monthValue = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.monthSelectChange]
    }
  }, _vm._l(_vm.getMonthsList, function (month, index) {
    return _c('option', {
      key: month,
      staticStyle: {
        "text-align-last": "center"
      },
      attrs: {
        "label": month
      },
      domProps: {
        "value": index
      }
    });
  }), 0) : _vm._e(), _vm._v(" "), this.yearSelect ? _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.yearValue,
      expression: "yearValue"
    }],
    staticStyle: {
      "margin-left": "5px"
    },
    attrs: {
      "size": "mini"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.yearValue = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.yearSelectChange]
    }
  }, _vm._l(_vm.numberofYears, function (i) {
    return _c('option', {
      key: i,
      staticStyle: {
        "text-align-last": "center"
      },
      attrs: {
        "label": _vm.formatNepali ? _vm.getNepaliDateWithYear(_vm.startingYear + (i - 1)).substr(0, 4) : _vm.startingYear + (i - 1)
      },
      domProps: {
        "value": _vm.startingYear + (i - 1)
      }
    });
  }), 0) : _vm._e(), _vm._v(" "), _c('button', {
    attrs: {
      "icon": "el-icon-arrow-right"
    },
    on: {
      "click": function ($event) {
        return _vm.next();
      }
    }
  }, [_c('b', [_vm._v(">")])])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "padding": "3px"
    }
  }, [_c('div', {
    staticClass: "calendar__weeks"
  }, _vm._l(_vm.weekdays, function (weekday, w) {
    return _c('div', {
      key: w,
      staticClass: "calendar__weekday",
      staticStyle: {
        "font-weight": "bold"
      }
    }, [_vm._v("\n            " + _vm._s(weekday) + "\n          ")]);
  }), 0), _vm._v(" "), _c('div', {
    staticClass: "calendar__days"
  }, [_c('div', {
    staticClass: "calendar__day_spacer",
    style: {
      gridColumn: "span " + _vm.startweek
    }
  }), _vm._v(" "), _vm._l(_vm.days, function (day, d) {
    return _c('div', {
      key: d,
      class: ['calendar__day', {
        selected: _vm.active(day)
      }, {
        today: _vm.checkToday(day)
      }],
      on: {
        "click": function ($event) {
          return _vm.select(day);
        }
      }
    }, [_vm._v("\n            " + _vm._s(_vm.formatNepali ? _vm.convertToNepali(day).substr(8, 10) : day.day) + "\n          ")]);
  })], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "calendar__footer"
  }, [_c('button', {
    on: {
      "click": function ($event) {
        return _vm.today();
      }
    }
  }, [_vm._v(_vm._s(_vm.formatedTodayText))])])]) : _vm._e()]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-74a859b2_0", {
    source: "*[data-v-74a859b2]{margin:0;box-sizing:border-box;font-family:\"Open Sans\",sans-serif}.datepicker[data-v-74a859b2]{position:relative}.datepicker button[data-v-74a859b2]{outline:0;border:0;background:0 0;cursor:pointer;transition:all .2s ease-in-out}.calendar[data-v-74a859b2]{z-index:9;position:absolute;width:260px;top:100%;box-shadow:0 14px 45px rgba(0,0,0,.25),0 10px 18px rgba(0,0,0,.22);background:#fff;visibility:hidden;opacity:0}.calendar.show[data-v-74a859b2]{visibility:visible;opacity:1}.calendar__header[data-v-74a859b2]{padding:15px 10px;background:#5495c5;color:#fff}.calendar__year[data-v-74a859b2]{opacity:.6;font-size:1rem;line-height:1.2rem}.calendar__date[data-v-74a859b2]{font-size:1.2rem;line-height:1.5rem}.calendar__month[data-v-74a859b2]{padding:5px 3px;display:flex;justify-content:space-between;align-items:center}.calendar__month select[data-v-74a859b2]{height:28px;width:100px;border-radius:5px;border-color:#7ca3f1;text-align-last:center}.calendar__month button[data-v-74a859b2]{width:25px;margin-right:4px;height:28px;margin-left:4px;border-radius:5px;color:#fff;text-align:center;background:#247ac4}.calendar__month button[data-v-74a859b2]:hover{background:#663399}.calendar__month__prev[data-v-74a859b2]{transform:rotate(180deg)}.calendar__days[data-v-74a859b2],.calendar__weeks[data-v-74a859b2]{display:grid;grid-template-columns:repeat(7,1fr)}.calendar__days[data-v-74a859b2]{gap:4px}.calendar__day[data-v-74a859b2],.calendar__weekday[data-v-74a859b2]{text-align:center;font-size:12px}.calendar__weekday[data-v-74a859b2]{opacity:.8;font-weight:300}.calendar__day[data-v-74a859b2]{width:32px;height:32px;line-height:32px;font-weight:300;color:#1c94b8;font-weight:700;cursor:pointer;border-radius:5px;background:#dfeffc}.calendar__day.selected[data-v-74a859b2]{background:#663399;color:#fff}.calendar__day.today[data-v-74a859b2]{background:#f77777;color:#fff}.calendar__day[data-v-74a859b2]:hover{background:#663399;color:#fff;opacity:.8}.calendar__footer[data-v-74a859b2]{text-align:right}.calendar__footer button[data-v-74a859b2]{padding:8px 10px;text-transform:uppercase;font-weight:700;color:#663399;opacity:.9}.calendar__footer button[data-v-74a859b2]:hover{opacity:1}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-74a859b2";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

// Import vue component

const install = function installVNepalidatepicker(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('VNepalidatepicker', __vue_component__);
}; // Create module definition for Vue.use()
// to be registered via Vue.use() as well as Vue.component()


__vue_component__.install = install; // Export component by default
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export default __vue_component__;
