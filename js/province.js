class Provinces {
  constructor(name, name_en, description, image) {
    this.name = name;
    this.name_en = name_en;
    this.description = description;
    this.image = image;
  }
}

class ProvinceList {
  provinces = [
    new Provinces(
      "រាជធានីភ្នំពេញ",
      "Phnom Penh",
      "រាជធានីរបស់ព្រះរាជាណាចក្រកម្ពុជាហើយជាទីក្រុងដែលធំជាងគេនៅក្នុងប្រទេសដែលមានចំនួនប្រជាជនជិត២លាននាក់នៅក្នុងឆ្នាំ ២០១៧។ ភ្នំពេញជាមជ្ឈមណ្ឌលធ្វើជំនួញ ពាណិជ្ជកម្ម ឧស្សាហកម្ម និងជាបណ្ដុំការងារច្រើនជាងគេក្នុងប្រទេស​កម្ពុជា។ ភ្នំពេញមានបណ្តុំសំណង់អាគារធំៗជាច្រើន រួមបញ្ជូលទាំងទីផ្សារ និងផ្សារទំនើបដែលធំជាងគេក្នុងប្រទេសកម្ពុជា សកលវិទ្យាលយ័ច្រើនជាងគេសំរាប់សិស្សានុសិស្សសិក្សារៀនសូត្រ ព្រលានយន្តហោះអន្តរជាតិ កំពង់ផែផ្លូវទឹក និងកំពង់ផែផ្លូវគោកសម្រាប់ផ្គត់ផ្គង់ការដឹកជញ្ជូននិងផ្ទុកទំនិញផ្សេងៗ និងកន្លែងទេសចរណ៍ដែលទាក់ទាញភ្ញៀវជាតិ-អន្តរជាតិបានច្រើនលំដាប់ទី២បន្ទាប់ពី ក្រុងសៀមរាប។",
      "../img/provinces/phnompenh.jpeg"
    ),
    new Provinces(
      "បន្ទាយមានជ័យ",
      "Banteay Meanchey",
      "ខេត្តបន្ទាយមានជ័យ ជាខេត្តមួយនៃព្រះរាជាណាចក្រកម្ពុជាស្ថិតនៅចុងពាយ័ព្យដែលមានសេដ្ឋកិច្ចយ៉ាងសំខាន់មួយរបស់ប្រទេស។ មានព្រំខេត្តជាប់ខេត្តឧត្តរមានជ័យ និង សៀមរាបនៅខាងកើត ខេត្តបាត់ដំបងនៅខាងត្បូង និងមានព្រំដែនរួមអន្តរជាតិជាមួយថៃនៅខាងលិច។ ទីរួមខេត្តនិងទីក្រុងធំបង្អស់គឺសិរីសោភ័ណ បន្ទាយមានជ័យគឺជាខេត្តធំបង្អស់ទី១៣ នៃព្រះរាជាណាចក្រកម្ពុជា។ ដោយមានប្រជាជន ៦៧៨,០៣៣ នាក់ វាជាប់លេខជាខេត្តធំទី ១០ ប្រចាំប្រទេស។ ក្រុងប៉ោយប៉ែតនៅប៉ែកខាងលិចនៃខេត្តគឺជាព្រំដែនអន្តរជាតិឆ្លងចូលទៅប្រទេសថៃ។ បន្ទាយមានជ័យគឺជាខេត្តមួយក្នុងចំណោមខេត្តទាំងប្រាំបួនដែលជាប៉ែកភាគនៃដែនជំរកជីវមណ្ឌលទន្លេសាប។",
      "../img/provinces/boteaymeanchey.jpeg"
    ),
    new Provinces(
      "បាត់ដំបង",
      "Battambang",
      "ខេត្តបាត់ដំបង គឺជាខេត្តមួយនៅភាគពាយ័ព្យនៃព្រះរាជាណាចក្រកម្ពុជា។ ខេត្តបាត់ដំបង មានទីប្រជុំជនធំនៅក្រុងបាត់ដំបង។ ខេត្តបាត់ដំបងមានព្រំប្រទល់ ខាងជើងជាប់ខេត្តបន្ទាយមានជ័យ ខាងកើតជាប់ខេត្តសៀមរាបនិងបឹងទន្លេសាប ខាងត្បូងជាប់ខេត្តពោធិ៍សាត់ ខាងលិចជាប់ខេត្តប៉ៃលិននិងខេត្តច័ន្ទបុរី(ប្រទេសថៃ)។",
      "../img/provinces/batdambong.jpeg"
    ),
    new Provinces(
      "កំពង់ចាម",
      "Kampong Cham",
      "ខេត្តកំពង់ចាម គឺជាខេត្តនៃប្រទេសកម្ពុជាដែលស្ថិតនៅវាលទំនាបកណ្ដាលនៃទន្លេមេគង្គ។ វាមានព្រំប្រទល់ជាប់នឹងខេត្តកំពង់ឆ្នាំងនៅខាងលិច កំពង់ធំ និង ក្រចេះនៅខាងជើង ត្បូងឃ្មុំនៅខាងកើត និង ព្រៃវែង និង កណ្ដាលនៅខាងត្បូង។ កំពង់ចាមជាផ្លូវការត្រូវបានបែងចែកទៅជាពីរខេត្តនៅថ្ងៃទី ៣១​ ធ្នូ ២០១៣ ជារឿងដែលគេមើលឃើញភាគច្រើនថាជារបត់នយោបាយរបស់បក្សកាន់អំណាច។ ផ្ទៃដីទាំងអស់នៅខាងលិចនៃទន្លេមេគង្គនៅតែជាកំពង់ចាមដដែល គ្រាដែលផ្ទៃដីនៅខាងកើតទន្លេបានក្លាយជាខេត្តត្បូងឃ្មុំ។ មុនការបែងចែកនេះ កំពង់ចាមបានលាតសន្ធឹងទៅខាងកើតដល់ព្រំដែនអន្តរជាតិជាមួយវៀតណាម ធ្លាប់ជាខេត្តធំទី១១នៅកម្ពុជា និងមានប្រជាជន ១ ៦៨០ ៦៩៤ នាក់ ដែលបានចាត់ទុកថាជាខេត្តដែលមានប្រជាជនច្រើនបំផុតទីពីរក្នុងប្រទេស។ ទីរួមខេត្ត និង ក្រុងធំបំផុតរបស់ខេត្តនេះគឺក្រុងកំពង់ចាម។ កំពង់ចាមគឺជាស្រុកកំណើតនៃលោកនាយករដ្ឋមន្ត្រីហ៊ុន-សែនបច្ចុប្បន្ន។",
      "../img/provinces/kompongchham.jpeg"
    ),
    new Provinces(
      "កំពង់ឆ្នាំង",
      "Kampong Chhnang",
      "ខេត្តកំពង់ឆ្នាំង ជាខេត្តមួយ ស្ថិតនៅភាគកណ្តាលនៃប្រទេស កម្ពុជា។ ខេត្តកំពង់ឆ្នាំង ជាខេត្តល្បីខាងផលិតក្អមឆ្នាំងមានគុណភាពល្អ អំពីដី។ ខេត្តជិតខាងគឺ (ពីខាងជើងតាមទ្រនិចនាឡិកាវិល) កំពង់ធំ កំពង់ចាម កណ្ដាល កំពង់ស្ពឺ និង ពោធិ៍សាត់។ ក្រុងទីរួមខេត្តកំពង់ឆ្នាំងគឺក្រុងកំពង់ឆ្នាំង។",
      "../img/provinces/kompongChhnang.jpeg"
    ),
    new Provinces(
      "កំពង់ស្ពឺ",
      "Kampong Speu",
      "ខេត្តកំពង់ស្ពឺស្ថិតនៅខាងលិចទីក្រុងភ្នំពេញហើយនៅជិតច្រកចូលទីក្រុងភ្នំពេញបំផុត ហើយក៏ជាខេត្តមួយត្រូវបានគេមើលរំលង ប៉ុន្តែជាកន្លែងពិសេសមួយដែលមិនសូវមានចរាចរណ៍ស្មុគស្មាញ។កំពង់ស្ពឺជាខេត្តល្បីល្បាញពីការផលិតស្ករត្នោតដែលមានគុណភាពល្អបំផុតនៅក្នុងប្រទេសកម្ពុជា។ ខេត្តនេះក៏ផលិតទឹកត្នោតជូរ និងស្រាទឹកត្នោតជាច្រើនផងដែរ។ ភ្នំឱរ៉ាល់ជាភ្នំខ្ពស់ជាងគេបំផុតដែលមានទីតាំងនៅព្រំដែនខេត្តដូចជា កណ្ដាល កោះកុង ពោធិ៍សាត់ តាកែវ និងកំពង់ឆ្នាំង។ ភ្នំនេះមានកម្ពស់១៨១៣ម៉ែត្រពីនីវោទឹកសមុទ្រ។ “ក្រុងច្បារមន ” ស្ថិតនៅក្នុងខេត្តកំពង់ស្ពឺមានព្រំប្រទល់ខាងជើងទល់នឹងឃុំខ្ទុំត្រាំង និងឃុំព្នាយ ស្រុកសំរោងទងខាងត្បូងទល់នឹងឃុំស្គុះ ស្រុកសំរោងទងខាងកើតទល់នឹងឃុំវល្លិស ស្រុកសំរោងទងខាងលិចទល់នឹងឃុំកាហែង និងឃុំធម្មតាអរ ស្រុកសំរោងទង។ មានក្រឡាផ្ទៃដីសរុប៖៨១,៤៤ គម២មាន ០៥ សង្កាត់ រួមមាន សង្កាត់រកាធំ, សង្កាត់ច្បារមន, សង្កាត់ស្វាយក្រវ៉ាន់, សង្កាត់សុព័រទេព សង្កាត់        កណ្តោលដុំមានប្រជាជន ៤៨.០៤៩ នាក់ ត្រូវជា ១០.៦០៣ គ្រួសារប្រជាជនភាគច្រើនប្រកបរបរជា កសិកម្ម សេវាកម្ម ឧស្សាហកម្ម និងមន្ត្រីរាជការ",
      "../img/provinces/komspeu.jpeg"
    ),
    new Provinces(
      "កំពង់ធំ",
      "Kampong Thom",
      " “ក្រុងស្ទឹងសែន​”ស្ថិតនៅក្នុង​ខេត្ដកំពង់ធំ​ដែលមានព្រំប្រទល់​ខាងជើងទល់នឹង ស្រុកកំពង់ស្វាយហើយមានច្រកចេញចូលចំនួន ២ គឺផ្លូវជាតិលេខ ៦ ខេត្ដសៀមរាបនិង ផ្លូវជាតិលេខ ៦២ ខេត្ដព្រះវិហារ។ ខាងត្បូងទល់​នឹង​ស្រុកសន្ទុកមានច្រកចេញចូលចំនួន១គឺផ្លូវពីស្រុកប្រាសាទសំបូរនិងស្រុកកំពង់ស្វាយ។ ខាងកើត​​ទល់​នឹង​ស្រុកកំពង់ស្វាយដែលមានច្រកចេញចូលចំនួន១គឺផ្លូវជាតិលេខ៦ខេត្ដកំពង់ចាមរាជធានៅភ្នំពេញ។ ខាងលិចទល់នឹងស្រុកកំពង់លែងខេត្ដកំពង់ឆ្នាំង(តំបន់ទន្លេសាប)ហើយមានច្រកចេញចូលចំនួន១គឺផ្លូវជាតិលេខ៥០C (កំពង់សាងសង់) និងផ្លូវទឹកនៅរដូវវស្សា។ ហើយមានផ្ទៃក្រឡាក្រុង​បេក្ខភាព​​៖ ៣៦៧,៥០​ គ.ម២ដែលមាន ៨សង្កាត់គឺ  សង្កាត់ដំរីជាន់ខ្លាសង្កាត់កំពង់ធំ សង្កាត់កំពង់រទេះ ​សង្កាត់អូរគន្ធរ ​សង្កាត់កំពង់ក្របៅ សង្កាត់ព្រៃតាហ៊ូ សង្កាត់អាចារ្យលាក់និងសង្កាត់ស្រយ៉ូវ។​​​​ ដែលប្រជាជន​សរុប៥៨,​៥៧៧នាក់ស្រី២៩,៩៧៥(​១៥៨នាក់/គ.ម២។",
      "../img/provinces/kompongThom.jpeg"
    ),
    new Provinces(
      "កំពត",
      "Kampot",
      "ខេត្តកំពត ជាខេត្តមួយស្ថិតនៅប៉ែកខាងត្បូងនៃប្រទេសកម្ពុជា ដែលមានចម្ងាយ ១៤៨ គ.ម. ពីទីក្រុងភ្នំពេញ មានព្រំប្រទល់ខាងជើងទល់នឹងស្រុកបរសេដ្ឋ ខេត្តកំពង់ស្ពឺ ខាងកើតជាប់នឹងស្រុកត្រាំកក់ និង ស្រុកគីរីវង់ ខេត្តតាកែវ ខាងត្បូងជាប់នឹងឈូងសមុទ្រ ខាងលិចជាប់នឹងស្រុកកំពង់សិលា និងស្រុកព្រៃនប់ ខេត្តព្រះសីហនុ ដូចគ្នាដែរ ខ្សែឆ្នេរដ៏វែងស្ថិតនៅលើឈូងសមុទ្រថៃទៅខាងត្បូង ខេត្តកំពតមានទីក្រុងឈ្មោះក្រុងកំពត។ កំពតមានប្រជាជន ៦២៧ ៨៨៤ នាក់ និងប្រកបដោយស្រុកនិងក្រុងចំនួនប្រាំបីដែលបានចែកទៅជាឃុំ-សង្កាត់ ៩២ ជាមួយនិងភូមិសរុប ៤៧៧ នាក់។ ខេត្ត​កំពត​មាន​សំណង់​ប្រវត្តិសាស្រ្តជាច្រើន​ដូចជា ​ផ្ទះ ផ្សារ​លក់​ទំនិញ រោងភាពយន្ត​ សាលារៀន​ ផ្លូវគមនាគមន៏ មន្ទីរពេទ្យជាដើម​ សុទ្ធ​សឹង​​ជា​ភស្ដុតាង]បង្ហាញ​ឱ្យ​ឃើញ​ពី​ការ​ចាប់​អារម្មណ៍​របស់​ពួក​បារាំង​ទៅ​លើ​ទឹក​ដី​ខ្មែរខេត្ត​កំពតមួយ​នេះ​។​ហើយក៏មានភ្នំបូកគោដែលជាទីចាប់អារម្មណ៍របស់ភ្ញៀវទេសចរណ៍ជាតិ និងអន្តរជាតិគ្រប់ៗរូបផងដែរ។ នៅលើនោះក៏មានកាស៊ីណូ និង មាន កន្លែងកម្សាន្តជាច្រើនដូចជា៖ វាលស្រែមួយរយ ទឹកធ្លាក់អាចមើលទេសភាព មកខាងក្រោមយ៉ាងស្រស់ស្អាត អាចចាប់ពពកបាន។-ល-។ ស្រុកទូកមាសបានតាំងទីនៅខេត្តកំពត។ទេសភាពនៃព្រែកកំពត មើលពីក្រុងកំពត ក្បែរសាលាខេត្ត ចំពីមុខភ្នំបូកគោ។",
      "../img/provinces/kompot.jpeg"
    ),
    new Provinces(
      "កណ្ដាល",
      "Kandal",
      "ខេត្តកណ្ដាលជាខេត្តនៅកណ្ដាលប្រទេសកម្ពុជាដែលព័ទ្ធជុំវិញទីក្រុងភ្នំពេញ។ ទីក្រុងរបស់ខេត្តនេះគឺតាខ្មៅ ខេត្តនេះក៏មានស្រុកឧត្ដុង្គដែលជាអតីតរាជធានីរបស់ប្រទេសនៅចន្លោះឆ្នាំ១៦១៨ និងឆ្នាំ១៨៦៦។ មានព្រះមហាក្សត្រមួយចំនួនគ្រងរាជ្យនៅរាជធានីឧត្តុង្គ។ ក្រុងតាខ្មៅ​ ស្ថិតនៅក្នុង​ខេត្ដកណ្តាលមានព្រំប្រទល់​ខាងជើងទល់នឹងរាជធានីភ្នំពេញ ខាងត្បូងទល់​នឹង ស្រុកស្អាង ខាងកើត​​ទល់​នឹង​ ទន្លេបាសាក់ ខាងលិចទល់នឹង ស្រុកកណ្តាលស្ទឹង ។ ហើយមានផ្ទៃក្រឡាក្រុង​បេក្ខភាព​​ ៣១,៧៨ គម២ ​  ​  ។ ដែលមាន ០៦សង្កាត់ ​សង្កាត់តាខ្មៅសង្កាត់ដើមមាន សង្កាត់កំពង់សំណាញ់ ​សង្កាត់ព្រែកឬស្សី ​សង្កាត់តាក្តុលសង្កាត់ព្រែកហូរ។​​​​",
      "../img/provinces/kandal.jpeg"
    ),
    new Provinces(
      "កោះកុង",
      "Koh Kong",
      "កោះកុង គឺជាខេត្តនៃកម្ពុជា។ ទីរួមខេត្តគឺក្រុងខេមរភូមិន្ទ។ ខេត្តនេះដែលមានក្រុងខេមរភូមិន្ទជាទីរួមខេត្តស្ថិតនៅភាគនិរតីនៃប្រទេសកម្ពុជា។ “ក្រុងខេមរភូមិន្ទ”  ស្ថិតនៅខេត្ដកោះកុងមានព្រំប្រទល់ខាងជើង ខាងត្បូង និងខាងកើត ជាប់នឹងស្រុកមណ្ឌលសីមា ខាងលិចជាប់នឹងព្រែកកោះប៉ោ (ដៃសមុទ្រ) ដែលជាដែនទឹកព្រំប្រទល់ដែនទឹករវាងក្រុងខេមរភូមិន្ទ និងស្រុកមណ្ឌលសីមា។  ហើយមានផ្ទៃក្រឡាបេក្ខភាព(គម២)៖ ១០០.៤៦ គ.ម២ស្មើនឹង០.៩១% នៃផ្ទៃដីទូទាំងខេត្តមាន ០៣សង្កាត់៖ សង្កាត់ស្មាច់មានជ័យ សង្កាត់ដងទង់ និងសង្កាត់ស្ទឹងវែងប្រជាជន ២៨ ៥៥៨នាក់ (៥ ៧៦៩គ្រួសារ) ដង់ស៊ីតេប្រជាជន ២៧០នាក់/គ.ម២  ",
      "../img/provinces/kohkong.jpeg"
    ),
    new Provinces(
      "ក្រចេះ",
      "Kratie",
      "ក្រចេះ គឺជាខេត្តមួយក្នុងប្រទេសកម្ពុជា។ ក្រុងរបស់ខេត្តមានឈ្មោះថា ក្រចេះដែលជាទីរួមខេត្ត។ ក្រចេះគឺជាខេត្តតូចមួយតែគួរឲ្យចាប់ចិត្ត សិ្ថតនៅប៉ែកឦសាននៃ រាជធានី ភំ្នពេញ។ វាមានព្រំប្រទល់ជាប់នឹងស្ទឹងត្រែងនៅភាគខាងជើង មណ្ឌលគីរីនៅខាងកើត កំពង់ធំ និង កំពង់ចាមនៅខាងលិច ហើយត្បូងឃ្មុំ និងវៀតណាមនៅខាងត្បូង។ មានផ្លូវគមនាគមន៍តភ្ជាប់ ៣ខែ្ស គឺផ្លូវជាតិលេខ៧ ចម្ងាយ ៣៤0 គីឡូម៉ែត្រ ផ្លូវលំក្រាលក្រួសក្រហម កាត់ស្រុកតំបែរ-ស្រុកឆ្លូង មួយខែ្ស និងតាមមាត់ទនេ្លមួយខែ្សទៀត មានចម្ងាយប្រហាក់ប្រហែល នឹងផ្លូវទឹកទនេ្លមេគង្គ ២២០ គីឡូម៉ែត្រ។ ការធ្វើដំណើរ ទោះបីតាមរថយន្តកី្ត តាមកាណូតលឿនកី្ត មិនលើសពី ៥ម៉ោងទេ ពិតជាបានមកដល់ក្រុងក្រចេះដោយសុវតិ្ថភាព។ ខេត្តក្រចេះ សម្បូរដោយធនធានធម្មជាតិ នៅលើដី មានព្រៃព្រឹក្សា វាលស្រែ ដីមានជីជាតិ នៅក្នុងទឹកសម្បូរដោយត្រី ពិសេសមេពូជត្រីធំៗ នៅតាមអន្លង់មេគង្គ ក្នុងស្រុកសំបូរ និងមានសត្វផ្សោតទឹកសាប ដែលទាក់ទាញភ្ញៀវ ទេសចរជាតិ និងអន្តរជាតិ",
      "../img/provinces/kroches.jpeg"
    ),
    new Provinces(
      "មណ្ឌលគីរី",
      "Mondulkiri",
      "ខេត្តមណ្ឌលគីរីជាខេត្តស្ថិតនៅភាគខាងកើតប្រទេសកម្ពុជា។ ខេត្តនេះមានផ្ទៃដីធំជាងគេ តែមានប្រជាជនតិចជាងគេ។ ទីរួមខេត្តឈ្មោះសែនមនោរម្យ។​ “ក្រុងសែនមនោរម្យ” ស្ថិតនៅខេត្តមណ្ឌលគិរីមានព្រំប្រទល់ខាងជើងទល់នឹងឃុំពូជ្រៃ ស្រុកពេជ្រដា  ។  ខាងត្បូងទល់នឹងឃុំសែនមនោរម្យ ស្រុកអូររាំង។  ខាងកើតទល់នឹងឃុំស្រែអំពូម ស្រុកពេជ្រដា។ ខាងលិចទល់នឹងឃុំមេម៉ង់ ស្រុកកែវសីមា។​ ហើយមានផ្ទៃក្រឡាបេក្ខភាព ៩៤០ គ.ម២។ មាន  ០៤ សង្កាត់ គឺសង្កាត់សុខដុម សង្កាត់មនោរម្យ សង្កាត់រមនា និងសង្កាត់ស្ពានមានជ័យ។ ខេត្ត​មណ្ឌល​គីរី​ជា​តំ​បន់​ទេស​ចរណ៏​ធម្មជាតិ​ ធំ​មួយ​នៃ​ព្រះ​រា​ជា​ណា​ចក្រ​កម្ពុជា​ ដែល​មាន​តំបន់​ទេស​ចរណ៏​ធម្ម​ជាតិ​ជា​ច្រើន​ដូច​ជា​ ទឹក​ជ្រោះ​ប្រកប​ដោយ​ហ្វូង​មច្ឆា​ ជា​ច្រើន​ប្រ​ភេទ​ ព្រម​ទាំង​ រុក្ខជាតិ ​សត្វព្រៃ​ ព្រៃកោងកាង​ និង​ភ្នំតូច​ ធំ​ ជា​ច្រើន​។",
      "../img/provinces/modolkiri.jpeg"
    ),
    new Provinces(
      "ពោធិ៍សាត់",
      "Pursat",
      "ខេត្តពោធិ៍សាត់មានទីតាំងនៅភាគខាងលិចបឹងទន្លេសាប។ ខេត្តពោធិ៍សាត់គ្របដណ្ដប់មួយភាគធំដោយជួរភ្នំ។ ទោះបីជាខេត្តនេះមិនមែនជាតំបន់ដែលមានប្រាសាទបុរាណ ផ្នែកសំខាន់ៗរបស់ខេត្តនេះពោរពេញទៅដោយប្រវត្តិសាស្រ្តសង្គ្រាមរវាងសៀម និងខ្មែរដែលបានកើតឡើងមុនសម័យអាណានិគមបារាំងក្នុងប្រទេសកម្ពុជា។ ទីតាំងប្រវត្តិសាស្រ្តដែលល្បីល្បាញមួយនោះគឺផ្នូររបស់ឧកញ៉ា ឃ្លាំង មឿង ដែលជាវីរបុរសរបស់ប្រជាជនកម្ពុជាដែលបានដឹកនាំការធ្វើសង្គ្រាមប្រឆាំង និងបានយកឈ្នះសៀមក្នុងឆ្នាំ១៤៨២។ អំឡុងពេលស្នាក់នៅខេត្តពោធិ៍សាត់ សូមទស្សនាក្រុងបណ្ដែតទឹក កំពង់ហ្លួង និងទស្សនាសម្រស់ធម្មជាតិអូរដា។ ទាំងពីរកន្លែងនេះមានការទាក់ទាញ ដែលខេត្តដ៏ស្រស់ស្អាតនេះមាន។ ខេត្តនេះក៏ត្រូវបានស្គាល់តាមរយៈថ្មម៉ាបដែលមានគុណភាពខ្ពស់បំផុត។",
      "../img/provinces/porsat.jpeg"
    ),
    new Provinces(
      "សៀមរាប",
      "Siem Reap",
      "ខេត្ដសៀមរាបមានព្រំប្រទល់ខាងជើងទល់នឹង ទល់ស្រុកអង្គរធំ និងស្រុកបន្ទាយស្រី។ ខាងត្បូងទល់នឹង៖ បឹងទន្លេសាប ខាងកើតទល់នឹង ស្រុកប្រាសាទបាគង។ ខាងលិចទល់នឹង៖ ស្រុកពួក។ ហើយមានផ្ទៃក្រឡាបេក្ខភាព ៤២៤.៧៣ គ.ម២។ មាន  ១២សង្កាត់ ដែលប្រជាជន ២៤៤,២៧២ នាក់ (៤៩,៨០៥ គ្រួសារ) ៥៤៩ នាក់/គម២។ សព្វថ្ងៃខេត្តសៀមរាបត្រូវបានគេស្គាល់ទូទាំងពិភពលោកថាជាខេត្ត​តាំងនៅនៃប្រាសាទអង្គរវត្តដ៏ល្បីល្បាញ។",
      "../img/provinces/seimreap.jpeg"
    ),
    new Provinces(
      "ព្រះសីហនុ",
      "Sihanoukville",
      "ខេត្តព្រះសីហនុ ជាក្រុងទេសចរណ៍ធម្មជាតិ ដែលមានព្រំប្រទល់ខាងកើតជាប់នឹងស្រុកព្រៃនប់ និងស្រុកស្ទឹងហាវ ខាងលិចជាប់នឹងសមុទ្រ ខាងជើងជាប់នឹងស្រុកស្ទឹងហាវ និងខាងត្បូងជាប់នឹងស្រុកព្រៃនប់មានផ្ទៃដីសរុប ១៩៥.៩០ គម២មានប្រជាជនសរុបចំនួន ៧,៦៥៧នាក់។ “ក្រុងព្រះសីហនុ” ស្ថិតនៅខេត្ដព្រះសីហនុមានព្រំប្រទល់ៈខាងកើតជាប់នឹងស្រុកព្រៃនប់ និងស្រុកស្ទឹងហាវ ខាងលិចជាប់នឹងសមុទ្រ ខាងជើងជាប់នឹងស្រុកស្ទឹងហាវ និងខាងត្បូងជាប់នឹងស្រុកព្រៃនប់ផ្ទៃក្រឡាបេក្ខភាព(គម២)១៩៥.៩០ គម២មាន ៥សង្កាត់ប្រជាជន ៧៧,៦៥៧នាក់ (១៧ ០០៣គ្រួសារ) ក្នុងនោះស្រី៣៩ ៥៥៤នាក់។",
      "../img/provinces/sihanouk.jpeg"
    ),
    new Provinces(
      "ស្ទឹងត្រែង",
      "Stung Treng",
      "ខេត្តស្ទឹងត្រែង គឺជាខេត្តមួយនៅចុងខាងជើងនៃប្រទេសកម្ពុជា។ ឈ្មោះដើមហៅថា សៀងតេង ។ ទីក្រុងរបស់ខេត្តស្ទឹងត្រែង មានឈ្មោះថា ទីក្រុងស្ទឹងត្រែង។ ក្រុងស្ទឹងត្រែង” ស្ថិតនៅខេត្តស្ទឹងត្រែងមានព្រំប្រទល់ខាងជើងទល់នឹង ព្រំប្រទល់ កម្ពុជា-ឡាវ​។ ខាងត្បូងទល់នឹងស្រុកសៀមបូក និងស្រុកសេសាន។ ខាងកើតទល់នឹង៖  ស្រុកសេសាន។ ខាងលិចទល់នឹងស្រុកថាឡាបរិវ៉ាត់ និងស្រុកសៀមបូក។​ ក្រុងស្ទឹងត្រែងមានផ្ទៃក្រឡាបេក្ខភាព ៦៩០ គ.ម២  ។ មាន  ០៤ សង្កាត់ គឺសង្កាត់ស្ទឹងត្រែង សង្កាត់ស្រះឬស្សី សង្កាត់ព្រះបាទ និងសង្កាត់សាមគ្គី។",
      "../img/provinces/srengtreng.jpeg"
    ),
    new Provinces(
      "ស្វាយរៀង",
      "Svay Rieng",
      "ខេត្តស្វាយរៀងប្រហែលជាខេត្តមួយក្នុងចំណោមខេត្តតូចបំផុតរបស់ប្រទេសកម្ពុជា ប៉ុន្តែមានផ្លូវជាតិដែលពេញទៅដោយចរាចរណ៍មមាញឹកបំផុតកាត់តាមទីប្រជុំជន។ ផ្លូវជាតិលេខ១ភ្ជាប់ពីភ្នំពេញទៅទីក្រុងហូជីមិញរបស់ប្រទេសវៀតណាមបន្ទាប់ពីឆ្លងទន្លេមេគង្គតាមរយៈស្រឡាងអ្នកលឿង។   ទីនេះជាច្រកចូលអន្តរជាតិតាមច្រកបាវិតទៅកាន់ប្រទេសវៀតណាម។ នេះជាក្រុងមួយដ៏រីកចម្រើនដែលបានទទួលផលពីចរាចរណ៍ពាណិជ្ជកម្មតាមព្រំដែន។ ទីនោះមានទីផ្សារដ៏មមាញឹក ហើយប្រជាជនមានភាពរស់រាយរាក់ទាក់។ ខេត្តនេះមានជម្រើសសម្រាប់ស្នាក់អាស្រ័យពិសេសៗជាច្រើន។",
      "../img/provinces/svayreang.jpeg"
    ),
    new Provinces(
      "តាកែវ",
      "Takeo",
      "ខេត្តតាកែវមានទីតាំងស្ថិតនៅចន្លោះខេត្តកណ្ដាល កំពត និងកំពង់ស្ពឺ។ ខេត្តតាកែវតែងតែត្រូវបានមើលរំលងពីទេសចរបរទេស ប៉ុន្តែទទួលចំណាត់ថ្នាក់ខ្ពស់ពីប្រជាជនក្នុងប្រទេសដែលធ្វើដំណើរទៅខេត្តនេះដើម្បីទស្សនាប្រាសាទនិងកន្លែងទេសចរណ៍ធម្មជាតិជាច្រើន។អំឡុងពេលធ្វើដំណើរឆ្ពោះទៅខេត្តតាកែវ សូមធ្វើដំណើរចូលទៅកាន់ភ្នំជីសូរដើម្បីទស្សនាប្រាសាទដែលបន្សល់ទុកពីសតវត្សរ៍ទី១១នៃសម័យអង្គរ។ ប្រាសាទនេះបានកសាងនៅលើកំពូលភ្នំដែលព័ទ្ធជុំវិញដោយទេសភាពជនបទ។",
      "../img/provinces/takeo.jpeg"
    ),
    new Provinces(
      "ឧត្តរមានជ័យ",
      "Oddor Meanchey",
      "ខេត្តឧត្តរមានជ័យមានទីតាំងនៅបណ្ដោយខ្សែព្រំដែនភាគខាងជើងប្រទេសកម្ពុជា។ ខេត្តនេះជាកន្លែងអតីតយោធាខ្មែរក្រហមរក្សាមូលដ្ឋានរឹងមាំចុងក្រោយបំផុត។ ទីក្រុងរបស់ខេត្តនេះគឺ អន្លង់វែងដែលមានផ្ទះចុងក្រោយបំផុតរបស់ ប៉ុល ពត ដែលជាមេដឹកនាំរបបខ្មែរក្រហមដែលត្រូវបានចាត់ទុកដោយរាជរដ្ឋាភិបាលកម្ពុជានៅក្នុងប្រវត្តិសាស្រ្តរបស់ប្រទេស។ ខេត្តនេះក៏មានទឹកជ្រោះចំប៉ីសម្រាប់ភ្ញៀវទេសចរណ៍កំសាន្តផងដែរ។ ទោះបីជាស្ថិតនៅទីដាច់ស្រយាល ខេត្តឧត្តរមានជ័យមានទីតាំងប្រវត្តិសាស្រ្តមួយចំនួនដែលគួរតែទៅទស្សនា។ នៅស្រុកអន្លង់វែង តាមបណ្ដោយផ្លូវជាតិលេខ ៦៨ ប្រហែល១០០គីឡូម៉ែត្រភាគខាងកើតទីរួមខេត្តឧត្តរមានជ័យ   ជាផ្ទះដែលធ្លាប់ជាកម្មសិទ្ធរបស់អតីតមេដឹកនាំខ្មែរក្រហម តាម៉ុក។",
      "../img/provinces/oukdormeanchey.jpeg"
    ),
    new Provinces(
      "កែប",
      "Kep",
      "ខេត្តកែបគឺជាខេត្តមួយដ៏តូចបំផុតរបស់កម្ពុជាដែលគ្របដណ្ដប់ផ្ទៃដីប្រមាណ​ ៣៣៦ គ.ម២  និងមានប្រជាជនចំនួន ៤០,២៨០ នាក់។ វាគឺជាខេត្តមួយក្នុងចំណោមខេត្តថ្មីៗបំផុតនៃកម្ពុជា រួមជាមួយ ប៉ៃលិន ព្រះសីហនុ និង ត្បូងឃ្មុំ ដែលត្រូវបានបង្កើតឡើងតាមរាជក្រឹត្យថ្ងៃ ២២ ធ្នូ ២០០៨ ត្រូវបានបំបែកចេញពីខេត្តកំពត ស្របនឹងការសម្របសម្រួលព្រំសីមាខេត្តជាច្រើន។ ទីរួមខេត្តគឺក្រុងកែប ហើយក៏មានឧទ្យានជាតិមួយដែរ ដែលគេហៅថាឧទ្យានជាតិកែប។ ខេត្ត​កែបជាខេត្ត​មួយ​ក្នុង​ចំណោម​ខេត្ត​ទាំង​៤​ដែល​ស្ថិត​នៅតាមឆ្នេរសមុទ្រភាគនិរតីនៃប្រទេសកម្ពុជា។ ខេត្តកែបស្ថិតនៅមិនប៉ុន្មានសហាតិមាត្រ​ពីព្រំដែនកម្ពុជា-វៀតណាមឡើយ។ ក្រុងកែបធ្លាប់ជាទីក្រុងឆ្នេរសមុទ្រដ៏ពេញនិយមរបស់​កម្ពុជា។ ឆ្នេរសមុទ្រនៅក្រុងកែបជាឆ្នេរព្រៃកោងកាង និង គ្រួសខ្មៅៗ ។ក្រុងកែបសំបូរគ្រឿងសមុទ្រថោកៗតែឆ្ងាញ់ ជាពិសេសគឺ ក្ដាមសមុទ្រ។",
      "../img/provinces/kep.jpeg"
    ),
    new Provinces(
      "ប៉ៃលិន",
      "Pailin",
      "ប៉ៃលិនជាខេត្តនៅភាគខាងជើងជួរភ្នំក្រវាញ នៅភាគខាងលិចប្រទេសកម្ពុជា ហើយមានចម្ងាយ២៥គីឡូម៉ែត្រពីព្រំដែនប្រទេសថៃ។ ខេត្តនេះព័ទ្ធជុំវិញដោយខេត្តបាត់ដំបង ដែលបានផ្ដាច់ចេញពីខេត្តបាត់ដំបងជាផ្លូវការ និងក្លាយជារដ្ឋបាលដាច់ដោយឡែកបន្ទាប់ពីការចុះចាញ់នៃខ្មែរក្រហមក្នុងឆ្នាំ១៩៩៦។“ក្រុងប៉ៃលិន” ស្ថិតនៅខេត្តប៉ៃលិនមានព្រំប្រទល់ខាងជើងទល់នឹង៖ ស្រុកសាលាក្រៅ  ខាងត្បូងទល់នឹង៖ ស្រុកសំឡូត ខេត្តបាត់ដំបងខាងកើតទល់នឹង៖  ស្រុករតនៈមណ្ឌល ខេត្តបាត់ដំបងខាងលិចទល់នឹង៖ ប្រទេសថៃ ផ្ទៃក្រឡាបេក្ខភាព៖ ៥៧១ គ.ម២  មាន  ០៤ សង្កាត់ គឺសង្កាត់ប៉ៃលិន សង្កាត់បយ៉ាខា សង្កាត់អូរតាវ៉ៅ និងសង្កាត់ទួលល្វា។",
      "../img/provinces/pailen.jpeg"
    ),
    new Provinces(
      "ត្បូងឃ្មុំ",
      "Tboung Khmum",
      "ត្បូងឃ្មុំ  គឺជាខេត្តនៃកម្ពុជាស្ថិតនៅវាលទំនាបកណ្ដាលនៃទន្លេមេគង្គ។ “ក្រុងសួង” ស្ថិតនៅខេត្តត្បូងឃ្មុំមានព្រំប្រទល់ខាងជើង ទល់នឹង ឃុំរការពប្រាំ ឃុំថ្មពេជ្រ ស្រុកត្បូងឃ្មុំ។ ខាងត្បូង ទល់នឹង ឃុំជីគរ ឃុំអញ្ចើម ស្រុកត្បូងឃ្មុំ។ ខាងលិច ទល់នឹង ឃុំជប់ ឃុំមង់រៀវ ស្រុកត្បូងឃ្មុំ។ ខាងកើត ទល់នឹង ឃុំល្ងៀង ឃុំគរ និងឃុំស្រឡប់ ស្រុកត្បូងឃ្មុំ ។ ហើយមានផ្ទៃក្រឡាបេក្ខភាព(គម២)៖ ៨២.៨០ គ.ម២ ។ មាន ០២សង្កាត់គឺសង្កាត់សួង និងសង្កាត់វិហារលួង។ ប្រជាជន ៣៨ ៦៥០នាក់ (៨ ១៥៦គ្រួសារ) ដង់ស៊ីតេប្រជាជន ៤៦៦នាក់/គ.ម២",
      "../img/provinces/tbongkhmom.jpeg"
    ),
    new Provinces(
      "ព្រះវិហារ",
      "Preah Vihear",
      "“ក្រុងព្រះវិហារ” ស្ថិតនៅខេត្តព្រះវិហារមានព្រំប្រទល់ខាងជើងទល់នឹង ឃុំពោធិ ប្រមេរុ  ខា...",
      "../img/provinces/prehvihea.jpeg"
    ),
    new Provinces(
      "ព្រៃវែង",
      "Prey Veng",
      "ខេត្តព្រៃវែងជាខេត្តតូចប៉ុន្តែជាខេត្តពោរពេញទៅដោយកសិកម្ម។ ខេត្តនេះមានទីតាំងនៅភាគនិរតីនៃទន្លេមេគង្គដ៏មានសក្ដានុពល។ ឈ្មោះព្រែវែងនេះមានន័យថា ព្រៃឈើដ៏វែង ប៉ុន្តែមិនមានព្រៃឈើនេះទៀតឡើយ ព្រោះព្រៃឈើភាគច្រើនត្រូវបានកាប់ជាច្រើនឆ្នាំមកហើយ។សម្រាប់ទេសចរណ៍ មិនមានកន្លែងច្រើនទេដែលត្រូវទៅទស្សនា។ ទោះបីជាយ៉ាងណា អំឡុងមុនសម័យអង្គរ ទីនេះប្រហែលជាតំបន់ដែលមានប្រជាជនរស់នៅច្រើននៅក្នុងប្រទេស។ អាណាចក្រមួយក្នុងចំណោមអាណាចក្រមុនសម័យអង្គរមានទីតាំងនៅតំបន់ជុំវិញបាភ្នំ។ ",
      "../img/provinces/preyveng.jpeg"
    ),
    new Provinces(
      "រតនគិរី",
      "Rattanakiri",
      "ខេត្តរតនគិរី ជាខេត្តនៅភាគឦសាននៃប្រទេសកម្ពុជា ។ ទីរួមខេត្តបានលុងស្ថិតនៅកណ្តាលខ្ពង់រាបនៃខេត្ត ចម្ងាយ ៥៨៦ គ.ម ពីទីក្រុងភ្នំពេញ ។ ខេត្តរតនគិរីមានព្រំប្រទល់ ខាងជើងទល់នឹង៖ ស្រុកអូរជុំ  ខាងត្បូងទល់នឹងស្រុកលំផាត់ខាងកើតទល់នឹង៖ ស្រុកបរកែវ ខាងលិចទល់នឹង៖ ស្រុកកូនមុំ ផ្ទៃក្រឡា ១៩២.៩២ គ.ម២មាន  ០៤ សង្កាត់",
      "../img/provinces/rothanakiri.jpeg"
    ),
  ];

  render() {
    const container = document.getElementById("provinces");
    this.provinces.forEach((v) => {
      const proEle = new Province(v);
      const provice = proEle.render();
      container.appendChild(provice);
    });
  }
}

class Province {
  constructor(provice) {
    this.provice = provice;
    this.container = document.getElementById("container");
  }
  // view more
  viewMore = () => {
    window.scrollTo({ top: 0 });
    const detailEle = document.createElement("div");
    detailEle.className = "province-detail";
    detailEle.innerHTML = `
    <div class="detail">
      <div class="detail-title">
        <div></div>
        <div class="btn-close" id="btn_close">
          <div
            class="line"
            style="transform: rotate(-45deg) translate(-5px, 4px)"
          ></div>
          <div
            class="line"
            style="transform: rotate(45deg) translate(0px, 1px)"
          ></div>
        </div>
      </div>
      <div class="province-content">
          <div class="detail-image">
          <img src=${this.provice.image} />
        </div>
        <div class="province-info">
        <div class="provice-title">
          <h5 class="title">${this.provice.name} (${this.provice.name_en})</h5>
        </div>
          <div class="province-des">
            <p class="">${this.provice.description}</p>
          </div>
        </div>
    </div>
    </div>
    `;
    detailEle.querySelector("#btn_close").addEventListener("click", () => {
      this.container.removeChild(detailEle);
      document.body.style.overflow = "unset";
    });
    setTimeout(() => {
      this.container.appendChild(detailEle);
    }, 50);
    document.body.style.overflow = "hidden";
  };
  // render
  render() {
    const provice = document.createElement("div");
    provice.className = "province";
    provice.innerHTML = `
    <div class="province-image">
      <img src=${this.provice.image} alt="" />
    </div>
    <div class="province-info">
      <div class="province-name">
        <h5 class="name">${this.provice.name}</h5> <span class="name-en">(${this.provice.name_en})</span>
      </div>
      <div class="province-des">
        <p class="description">
          ${this.provice.description}
        </p>
        <div class="btn">
          <button class="more-btn">More</button>
        </div>
      </div>
    </div>
  `;
    provice.querySelector("button").addEventListener("click", this.viewMore);
    return provice;
  }
}
const app = new ProvinceList();
app.render();
