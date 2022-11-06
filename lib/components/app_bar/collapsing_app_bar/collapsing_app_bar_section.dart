import 'package:flutter/material.dart';
import 'package:flutter_components/components/app_bar/collapsing_app_bar/collapsing_app_bar_mobile.dart';
import 'package:flutter_components/components/app_bar/collapsing_app_bar/collapsing_app_bar_tab.dart';
import 'package:flutter_components/utils/responsive/responsive_util.dart';

class CollapsingAppBarSection extends StatelessWidget {
  const CollapsingAppBarSection({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const ResponsiveUtil(
      mobileWidget: CollapsingAppBarMobile(),
      tabletWidget: CollapsingAppBarTab(),
      webWidget: CollapsingAppBarTab(),
    );
  }
}
