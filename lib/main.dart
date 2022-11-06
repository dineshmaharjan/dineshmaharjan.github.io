import 'package:flutter/material.dart';
import 'package:flutter_components/components/app_bar/app_bar_section.dart';
import 'package:flutter_components/components/app_bar/collapsing_app_bar/collapsing_app_bar_section.dart';
import 'package:flutter_components/components/app_bar/collapsing_app_bar_with_tab_bar/collapsing_app_bar_with_tab_section.dart';


void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Bottom Nav',
      theme: ThemeData(

        primarySwatch: Colors.blue,
      ),
      home: const CollapsingAppBarWithTabSection(),
    );
  }
}
