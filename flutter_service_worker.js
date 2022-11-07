'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".dart_tool/chrome-device/Default/Affiliation%20Database": "becbfbbf31e77fd763bff5356811e570",
".dart_tool/chrome-device/Default/Affiliation%20Database-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/AutofillStrikeDatabase/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/AutofillStrikeDatabase/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/AutofillStrikeDatabase/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/BudgetDatabase/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/BudgetDatabase/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/BudgetDatabase/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/commerce_subscription_db/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/commerce_subscription_db/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/commerce_subscription_db/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/coupon_db/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/coupon_db/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/coupon_db/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/databases/Databases.db": "89f95cba7df4701a8173efa00dd6b94c",
".dart_tool/chrome-device/Default/databases/Databases.db-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Download%20Service/EntryDB/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Download%20Service/EntryDB/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Download%20Service/EntryDB/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Download%20Service/Files/bde46ac3-17ab-4826-a5f2-ace16ada3e0c": "a3663f938b10f16ab3f521045b4ae594",
".dart_tool/chrome-device/Default/Extension%20Scripts/000003.log": "021b8d293c14358bb37b18ba45792aa5",
".dart_tool/chrome-device/Default/Extension%20Scripts/CURRENT": "2d77ae4d0f1ac6f2c6b6dfd2d8131506",
".dart_tool/chrome-device/Default/Extension%20Scripts/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Extension%20Scripts/LOG": "eea3ee115160776607ff8bb017b33e4b",
".dart_tool/chrome-device/Default/Extension%20Scripts/LOG.old": "2476310dc749bdc2bbadd531a3d12314",
".dart_tool/chrome-device/Default/Extension%20Scripts/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/Extension%20State/000003.log": "785c71b68bf89a0e9973e06d76434ab1",
".dart_tool/chrome-device/Default/Extension%20State/CURRENT": "2d77ae4d0f1ac6f2c6b6dfd2d8131506",
".dart_tool/chrome-device/Default/Extension%20State/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Extension%20State/LOG": "f64f0e757685d57a3ed8b926d683295c",
".dart_tool/chrome-device/Default/Extension%20State/LOG.old": "276adf92cf48e111877d20550abeb1ab",
".dart_tool/chrome-device/Default/Extension%20State/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/Favicons": "3eea0768ded221c9a6a17752a09c969b",
".dart_tool/chrome-device/Default/Favicons-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Feature%20Engagement%20Tracker/AvailabilityDB/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Feature%20Engagement%20Tracker/AvailabilityDB/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Feature%20Engagement%20Tracker/AvailabilityDB/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Feature%20Engagement%20Tracker/EventDB/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Feature%20Engagement%20Tracker/EventDB/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Feature%20Engagement%20Tracker/EventDB/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/GCM%20Store/Encryption/000003.log": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/GCM%20Store/Encryption/CURRENT": "2d77ae4d0f1ac6f2c6b6dfd2d8131506",
".dart_tool/chrome-device/Default/GCM%20Store/Encryption/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/GCM%20Store/Encryption/LOG": "7a64d6d9a854b4a605a680853f4bbd1f",
".dart_tool/chrome-device/Default/GCM%20Store/Encryption/LOG.old": "4b6421fb86afa67feac7183c85b2ab14",
".dart_tool/chrome-device/Default/GCM%20Store/Encryption/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/heavy_ad_intervention_opt_out.db": "51a706fb9564aaf43ab31a0fd957ce75",
".dart_tool/chrome-device/Default/heavy_ad_intervention_opt_out.db-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/History": "c92d43cb6b78eeaef8baadd049482fa3",
".dart_tool/chrome-device/Default/History-journal": "2cd3379380689f2ed8f9bb529e0cfade",
".dart_tool/chrome-device/Default/Local%20Storage/leveldb/000003.log": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Local%20Storage/leveldb/CURRENT": "2d77ae4d0f1ac6f2c6b6dfd2d8131506",
".dart_tool/chrome-device/Default/Local%20Storage/leveldb/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Local%20Storage/leveldb/LOG": "9a10f3671d3fb05541daef6f56ece5d4",
".dart_tool/chrome-device/Default/Local%20Storage/leveldb/LOG.old": "cd0963b2d9e730b7a5d55649db747a7a",
".dart_tool/chrome-device/Default/Local%20Storage/leveldb/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Login%20Data": "02d2c46697e3714e49f46b680b9a6b83",
".dart_tool/chrome-device/Default/Login%20Data%20For%20Account": "02d2c46697e3714e49f46b680b9a6b83",
".dart_tool/chrome-device/Default/Login%20Data%20For%20Account-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Login%20Data-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Network/Cookies": "c9ff7748d8fcef4cf84a5501e996a641",
".dart_tool/chrome-device/Default/Network/Cookies-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Network/Network%20Persistent%20State": "e99dbb082bdeddd45eecc1559836177c",
".dart_tool/chrome-device/Default/Network/NetworkDataMigrated": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Network/Reporting%20and%20NEL": "8ab6247ab7af68fe4e26a10db8a94b5e",
".dart_tool/chrome-device/Default/Network/Reporting%20and%20NEL-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Network/TransportSecurity": "c2e5ebe1e71e51b32723b17cef06dbea",
".dart_tool/chrome-device/Default/Network%20Action%20Predictor": "186469bef46ec45870ee628001f6de89",
".dart_tool/chrome-device/Default/Network%20Action%20Predictor-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/optimization_guide_hint_cache_store/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/optimization_guide_hint_cache_store/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/optimization_guide_hint_cache_store/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/optimization_guide_model_metadata_store/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/optimization_guide_model_metadata_store/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/optimization_guide_model_metadata_store/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/optimization_guide_prediction_model_downloads/3697d6e0-ca03-4a84-a700-ebe779e82321/model.tflite": "6d7c2f9e94664539dec99b3233301b01",
".dart_tool/chrome-device/Default/optimization_guide_prediction_model_downloads/3eb20eb5-601a-47a3-a2f8-5d70a19f51c0/model.tflite": "89932adf9cc14986ca58687a6fad996d",
".dart_tool/chrome-device/Default/optimization_guide_prediction_model_downloads/5dc928d2-c6b8-4307-bb07-8fd3a958897b/model.tflite": "d8c3fbaee14449fbcae096a9a6d2dea1",
".dart_tool/chrome-device/Default/Preferences": "0a1f80320f70b32006f39259236d8552",
".dart_tool/chrome-device/Default/PreferredApps": "2b432fef211c69c745aca86de4f8e4ab",
".dart_tool/chrome-device/Default/README": "883d62acd72005f3ad7a14500d482033",
".dart_tool/chrome-device/Default/Safe%20Browsing%20Network/NetworkDataMigrated": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Safe%20Browsing%20Network/Safe%20Browsing%20Cookies": "c9ff7748d8fcef4cf84a5501e996a641",
".dart_tool/chrome-device/Default/Safe%20Browsing%20Network/Safe%20Browsing%20Cookies-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Secure%20Preferences": "bfe2c0efd223284d16f59dfcfd221538",
".dart_tool/chrome-device/Default/Segmentation%20Platform/SegmentInfoDB/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Segmentation%20Platform/SegmentInfoDB/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Segmentation%20Platform/SegmentInfoDB/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Segmentation%20Platform/SignalDB/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Segmentation%20Platform/SignalDB/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Segmentation%20Platform/SignalDB/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Segmentation%20Platform/SignalStorageConfigDB/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Segmentation%20Platform/SignalStorageConfigDB/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Segmentation%20Platform/SignalStorageConfigDB/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Service%20Worker/Database/000003.log": "f5a10e19c788afb551d5783675b62404",
".dart_tool/chrome-device/Default/Service%20Worker/Database/CURRENT": "2d77ae4d0f1ac6f2c6b6dfd2d8131506",
".dart_tool/chrome-device/Default/Service%20Worker/Database/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Service%20Worker/Database/LOG": "87efb7c3aedc3212ce43056c5d07d1e6",
".dart_tool/chrome-device/Default/Service%20Worker/Database/LOG.old": "5edfe3ff2a6820b32e91bca96958b72a",
".dart_tool/chrome-device/Default/Service%20Worker/Database/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/Service%20Worker/ScriptCache/2cc80dabc69f58b6_0": "693c5e39a4dab19870ad71c9ad7c1419",
".dart_tool/chrome-device/Default/Service%20Worker/ScriptCache/index": "54cb446f628b2ea4a5bce5769910512e",
".dart_tool/chrome-device/Default/Service%20Worker/ScriptCache/index-dir/the-real-index": "33acbb319cd43e964e4db5d0a49f80a1",
".dart_tool/chrome-device/Default/Session%20Storage/000003.log": "40b4ac2aaf6dfb025c61a6048b6b03f7",
".dart_tool/chrome-device/Default/Session%20Storage/CURRENT": "2d77ae4d0f1ac6f2c6b6dfd2d8131506",
".dart_tool/chrome-device/Default/Session%20Storage/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Session%20Storage/LOG": "81b5e4513a285a3900770c0ce88c89ff",
".dart_tool/chrome-device/Default/Session%20Storage/LOG.old": "03bd3e4c3e303a7ecd9affd205978c98",
".dart_tool/chrome-device/Default/Session%20Storage/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/Sessions/Session_13311922126789391": "ce38c1cfc5a87aa86c522abe0fcfcd19",
".dart_tool/chrome-device/Default/Sessions/Session_13312210059697918": "4bfd367d35ff76e31d86b117ebd7fa25",
".dart_tool/chrome-device/Default/shared_proto_db/000003.log": "c03638436819ee6a202d02b3e09ec4ac",
".dart_tool/chrome-device/Default/shared_proto_db/CURRENT": "2d77ae4d0f1ac6f2c6b6dfd2d8131506",
".dart_tool/chrome-device/Default/shared_proto_db/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/shared_proto_db/LOG": "7800169917fd5650258c6308fc747c7a",
".dart_tool/chrome-device/Default/shared_proto_db/LOG.old": "78bededebdade2327992e277368ad44f",
".dart_tool/chrome-device/Default/shared_proto_db/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/shared_proto_db/metadata/000003.log": "ea6a2c3708c27a2e9de4da2c6a5a1ec1",
".dart_tool/chrome-device/Default/shared_proto_db/metadata/CURRENT": "2d77ae4d0f1ac6f2c6b6dfd2d8131506",
".dart_tool/chrome-device/Default/shared_proto_db/metadata/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/shared_proto_db/metadata/LOG": "8abbfbe89f494fb161caa08d0886cbe6",
".dart_tool/chrome-device/Default/shared_proto_db/metadata/LOG.old": "5d2c11dc385efc715512b7fc3f2260a8",
".dart_tool/chrome-device/Default/shared_proto_db/metadata/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/Shortcuts": "f63079dc2cf2382ef61d4d555639c357",
".dart_tool/chrome-device/Default/Shortcuts-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Site%20Characteristics%20Database/000003.log": "7c7f314d1ae7dc6c9f1cfe8a8ebcd66a",
".dart_tool/chrome-device/Default/Site%20Characteristics%20Database/CURRENT": "2d77ae4d0f1ac6f2c6b6dfd2d8131506",
".dart_tool/chrome-device/Default/Site%20Characteristics%20Database/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Site%20Characteristics%20Database/LOG": "5299e643812360932e40e7cedb1f5215",
".dart_tool/chrome-device/Default/Site%20Characteristics%20Database/LOG.old": "1ecf0fa48e6ddf727fe7babcf0521ce9",
".dart_tool/chrome-device/Default/Site%20Characteristics%20Database/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/Sync%20Data/LevelDB/000003.log": "90881c9c26f29fca29815a08ba858544",
".dart_tool/chrome-device/Default/Sync%20Data/LevelDB/CURRENT": "2d77ae4d0f1ac6f2c6b6dfd2d8131506",
".dart_tool/chrome-device/Default/Sync%20Data/LevelDB/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Sync%20Data/LevelDB/LOG": "828716b77e051a2afcf51ed7fba54cb3",
".dart_tool/chrome-device/Default/Sync%20Data/LevelDB/LOG.old": "d3b99a212bd2aa5f30cc7ea71e09d70e",
".dart_tool/chrome-device/Default/Sync%20Data/LevelDB/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/Top%20Sites": "49be1167a648909e7566cf69b173f05b",
".dart_tool/chrome-device/Default/Top%20Sites-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Trusted%20Vault": "7ef4a09779d5353735f5c29304aa6988",
".dart_tool/chrome-device/Default/Visited%20Links": "177a2848a68b534902fee02744a5e934",
".dart_tool/chrome-device/Default/Web%20Data": "d54740cae5a4fa0e5ec6fd49edcd0790",
".dart_tool/chrome-device/Default/Web%20Data-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/WebStorage/QuotaManager": "7a7468187820286d9201fe37036e2b9b",
".dart_tool/chrome-device/Default/WebStorage/QuotaManager-journal": "3bcd88431a730b6afa9edec7c9c03c68",
".dart_tool/flutter_build/83131b649491446097cb53f88d549c0d/app.dill": "adaaecc0de4e7d7f529d973dd1a973a3",
".dart_tool/flutter_build/83131b649491446097cb53f88d549c0d/debug_android_application.stamp": "a8f2d66db68ad085ded2180e130e3677",
".dart_tool/flutter_build/83131b649491446097cb53f88d549c0d/flutter_assets.d": "61e344f8d26c3d87156d3f252ddf69e5",
".dart_tool/flutter_build/83131b649491446097cb53f88d549c0d/gen_dart_plugin_registrant.stamp": "436d2f2faeb7041740ee3f49a985d62a",
".dart_tool/flutter_build/83131b649491446097cb53f88d549c0d/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
".dart_tool/flutter_build/83131b649491446097cb53f88d549c0d/kernel_snapshot.d": "19ddc40d3a0241fb2c731f53e8553efd",
".dart_tool/flutter_build/83131b649491446097cb53f88d549c0d/kernel_snapshot.stamp": "d08aad72116ab49edacfae734b3a9d76",
".dart_tool/flutter_build/83131b649491446097cb53f88d549c0d/outputs.json": "f87fcfed6a8aba8f3e1da4d805fbe7c4",
".dart_tool/flutter_build/b3faba8a91fa3d5af80224f59ed51d43/app.dill": "dabf6c8a94406215cf65e9f6e537605c",
".dart_tool/flutter_build/b3faba8a91fa3d5af80224f59ed51d43/app.dill.deps": "b957fe3cee8e20ce682a6da61edc9445",
".dart_tool/flutter_build/b3faba8a91fa3d5af80224f59ed51d43/dart2js.d": "a3ad7b068a467624a93fdaff5852c79a",
".dart_tool/flutter_build/b3faba8a91fa3d5af80224f59ed51d43/dart2js.stamp": "73157991548079ec5866447e43d04124",
".dart_tool/flutter_build/b3faba8a91fa3d5af80224f59ed51d43/flutter_assets.d": "0cbf4772ae9247666db33dc10e83bf48",
".dart_tool/flutter_build/b3faba8a91fa3d5af80224f59ed51d43/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
".dart_tool/flutter_build/b3faba8a91fa3d5af80224f59ed51d43/main.dart": "a646a8769f4a220455a88836309c3c77",
".dart_tool/flutter_build/b3faba8a91fa3d5af80224f59ed51d43/main.dart.js": "3d38745acf3fbba53cf1dae1c66a4e70",
".dart_tool/flutter_build/b3faba8a91fa3d5af80224f59ed51d43/main.dart.js.deps": "5adf4e0cde33078669cf68d27c2ecac8",
".dart_tool/flutter_build/b3faba8a91fa3d5af80224f59ed51d43/outputs.json": "ad12528fb9008ad441b8d9ba164aee41",
".dart_tool/flutter_build/b3faba8a91fa3d5af80224f59ed51d43/service_worker.d": "81b21c8707ae44812dd31856409330c0",
".dart_tool/flutter_build/b3faba8a91fa3d5af80224f59ed51d43/web_entrypoint.stamp": "ca991b33a970ff18f3ade28c673e4a24",
".dart_tool/flutter_build/b3faba8a91fa3d5af80224f59ed51d43/web_release_bundle.stamp": "2344fd51fa7cc57b60ccd7fe89885133",
".dart_tool/flutter_build/b3faba8a91fa3d5af80224f59ed51d43/web_resources.d": "f0cccf26e63dba5c6051d3be79b51b68",
".dart_tool/flutter_build/b3faba8a91fa3d5af80224f59ed51d43/web_service_worker.stamp": "29e323f605bb265f888a31ef4e8a402e",
".dart_tool/package_config.json": "5b7ced89ce7280a3ac68f5951e5d315e",
".dart_tool/package_config_subset": "544e476f4ed08e83d92336da62aff37e",
".dart_tool/version": "a13ed25c1389038783693bec771e71f6",
".git/COMMIT_EDITMSG": "08e4701fb086063a24715183fea2c7ea",
".git/config": "2daafbcd43ab20c5f404ecdfd14bdc80",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0759131afe0fcac21fa3fb6e423596d8",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0bf1ab7b20850c2f974a1bbf99fd27f2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2f9e723e907b19b8538a15395cd572a6",
".git/logs/refs/heads/master": "2f9e723e907b19b8538a15395cd572a6",
".git/logs/refs/remotes/origin/master": "dc08ccb1390432a5f4375e87e0ad759f",
".git/objects/01/fdcd19d85e069b8aec48ad65b65cb49abc49f9": "a91c0b1911bdf0e9f73e4ba5e278b9ce",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0d/766b0a6dbb3a5312d7af89b5d4b93f38782787": "639a3e0950b380bf6998616b4b49742f",
".git/objects/19/a9435ce51e2d78fedaf4adc7ccd4e51d57c91b": "5627d6d8897fc60c361b27c585a6b4aa",
".git/objects/1a/5225115fcdd673d8fb48472224fc13bde3bafa": "ff602f41a1c8eeaf1f2fc32addf5a154",
".git/objects/1c/49a451b07e03e5508cbd6d48e34ce9802fe877": "d6b03803e0271b14c77f1c1cea158aea",
".git/objects/1e/a63c5cc5149368f720ef1a0b1fbc8c3c7e4524": "9c6849c9c92e8f2d7e17203041587a20",
".git/objects/2c/969fa17083682f768df4de5d5349c42685636a": "f5483f188ec0a3c00fd161e388fe481a",
".git/objects/2f/9198b1a2a9248502995862bddd9cb6d3431e0b": "8e0dd57d3241e98dbb55a6cd1c1ccc4d",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/cb87f0a2ffb70088580cca84e707f870d76b98": "0900f561315bdc8a5b0ea0f0591f1191",
".git/objects/39/c1d6cb1f7c1e29cff0ce3681a1ccbe3a46133d": "1d1934660a174f4b1df469a04575e909",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/53/dae482966f0ec6dca57b417912dcb577da4f2f": "f23f57e28f9d728f179f11c927241268",
".git/objects/6f/4274aed9fda3b20557a5e47e7244eb3a9d4606": "d77c32996d2b46e07b6698856f994150",
".git/objects/71/4147cde03a7eaf5d6c4098e8cc72cb40c92ef0": "15be8bb9c6aa1eb751ec7bc13dc7c6ba",
".git/objects/71/9d8bc7168416403eb9c0d7cb4ef3b83354ad63": "b6eb592ef90a443bc5b3235df82e3b75",
".git/objects/74/9004afc2ad0e46e8c997e4c8c992cd538a0416": "b40e73268e406a4a9fc04ffcb02f3d51",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/aac3511d847901af98888db6a0606a02ad4014": "6b1417a0db2c18099047655b3cb410bd",
".git/objects/86/49852045381184d7be75a31a3d86ab0c706ef0": "bd822d35034a69795b58b13ba760ae1b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/82d83f415c79ae908cc00dcbe49b36792f1a62": "fdfc15cbd57b70619fe53c029ab5c0a8",
".git/objects/94/d1cd8abae59709060035e1b7e610ac9e670e02": "fa0db2563b0a31878fefc7be4f53ef95",
".git/objects/a0/20f9f2af6db2cac877f5103ffbb4ee29aaca07": "8c2bcb5de5aac92354a4876026f515cc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/db534a2d4110e03976a78b86f8b29da954f18d": "29407b515f60132f0bbd4e2bb14aca52",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/d67542f76ad36956cc6de60fbc9af2c4775927": "11ff4870e9c44b40ffdd8452693bee88",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/316b0be0f88a0f623deccd48adc6d932dab4d9": "7da8edbeb9a8b230ac4a5cf52efaf0ad",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/078bbd55b819816e537c12a827f2137476ad7d": "ebd585742547f337135ef0cf85dade04",
".git/objects/c6/e9a6d5fbdc65c0ef1a64a9e184822c66b7696a": "65fc9f5eaf3aed7c0af852962f311b70",
".git/objects/c9/495e353e6616118f9948b4f968883206589f73": "e45d84eb0261b4ed6055c3004bbb72ef",
".git/objects/d3/e4fd8feaeec0cabb44f760804573075ea6fc97": "68627a5d32ad7d8abffeaea4d0e3186b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/5402a1bd618c8afba0466c7116c0fdf188d94f": "7626fdaad6f89814cc053c97321e1913",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/2e183852d95630c115f1672a777b2bf3242b64": "b6abca9966cbbb64892b269ab760f1d7",
".git/objects/f1/9c5a30efb5858e6cb039dd5098ebff7a544cf2": "c51891468a57b7c24243a6132b8499d8",
".git/objects/f9/a4d84ce07620b86ea9dd49e755a5a838419bc6": "b5fe87031d2683bddf40375d1e09684f",
".git/objects/pack/pack-230e4eaea6c319a4cb5630fe263e03280a7363e3.idx": "0f355130fce50d612991acab63a0a830",
".git/objects/pack/pack-230e4eaea6c319a4cb5630fe263e03280a7363e3.pack": "16eb44ab3ebed49682b67775a7a30320",
".git/objects/pack/pack-90dccf52a9f97ca01847f073321705e115e34548.idx": "8878d53d286e2fb05f6c5537d93be657",
".git/objects/pack/pack-90dccf52a9f97ca01847f073321705e115e34548.pack": "927ad43890f22aeeff6ebe2f4e1a027e",
".git/ORIG_HEAD": "5449c333f473c25f699ef727d8e99915",
".git/refs/heads/master": "cfe6945e27ed6bf680cfcc0f69e3e276",
".git/refs/remotes/origin/master": "cfe6945e27ed6bf680cfcc0f69e3e276",
"analysis_options.yaml": "5df212687f3997ccd1310b5b19ebfb78",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "8b5f0b8e497484f7604f333baa4fbc5b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"CATEGORY.json": "d304a83b5cf703a49252d3017dbf3d14",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_components.iml": "3de05facae49efa0b9e8129f42bb5dd7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5ad439272733cf7810b137448cabd5ec",
"/": "5ad439272733cf7810b137448cabd5ec",
"JOKE.json": "1857a811a561a49b88fe7cbab90ad684",
"main.dart.js": "7b8435f9f39c2efc123f82a705ef7b63",
"manifest.json": "1de6618f9cda5d37ce44585544c2f0d8",
"quote.json": "bcd683b5800c85bde30376ccc48e652b",
"README.md": "2562feadb461c067e27020ccc0e81847",
"version.json": "6964d36a3d8825d0cb314811004b150e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
