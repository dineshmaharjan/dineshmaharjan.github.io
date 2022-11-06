import 'package:flutter/material.dart';
import 'package:flutter_components/components/app_bar/app_bar_mobile.dart';
import 'package:flutter_components/components/app_bar/app_bar_tab.dart';
import 'package:flutter_components/components/app_bar/app_bar_web.dart';
import 'package:flutter_components/utils/responsive/responsive_util.dart';


class AppBarSection extends StatelessWidget {
  const AppBarSection({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const ResponsiveUtil(
      tabletWidget: AppBarTab(),
      mobileWidget: AppBarMobile(),
      webWidget: AppBarWeb(),
    );
  }
}
